'use client'

import { useLocations } from "@/hook"
import { useEffect, useState } from "react";
import { Input } from "../Input";
import { useTranslations } from "next-intl";

export const LocationInput = () => {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const { getLocations, locations} =  useLocations();
    const t = useTranslations('HomePage');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
        if (query.length >= 2) getLocations(query)
        }, 300);

        return () => clearTimeout(delayDebounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    return (
        <div className="location-input-container">
            <Input
                label={t('input.location')}
                id="location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('input.placeholder.location')}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
            {showDropdown && locations.length > 0 && (
                <ul className="suggestions-dropdown">
                    {locations.map((item, index) => (
                        <li key={index}  className="suggestion-item"  onMouseDown={() => setQuery(item.label)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}