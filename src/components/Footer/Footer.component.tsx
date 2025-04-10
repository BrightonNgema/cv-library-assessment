"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const locations: string[] = [
  "Aberdeen",
  "Basingstoke",
  "Berkshire",
  "Birmingham",
  "Bradford",
  "Bristol",
  "Derby",
  "Doncaster",
  "Edinburgh",
  "Essex",
  "Exeter",
  "Glasgow"
];

const industries: string[] = [
  "Accounting Jobs",
  "Admin Jobs",
  "Automotive Jobs",
  "Aviation Jobs",
  "Banking Jobs",
  "Customer Services Jobs",
  "Design Jobs",
  "Education Jobs",
  "Engineering Jobs",
  "Environmental Jobs",
  "Finance Jobs",
  "Healthcare Jobs",
  "Hospitality Jobs",
  "IT Jobs",
];

export const Footer = () => {
     const t = useTranslations('Footer');
    const [activeTab, setActiveTab] = useState('location');
    const activeData = activeTab === 'location' ? locations : industries
    return (
        <div className="footer-container">
            <div className="tabs-wrapper">
                <div onClick={() => setActiveTab('location')} className={`tab ${activeTab === "location" ? "active" :""}`}>
                     {t("jobByLocation")}
                </div>
                <div onClick={() => setActiveTab('industry')} className={`tab ${activeTab !== "location" ? "active" :""}`}>
                    {t("jobByIndustry")}
                </div>
            </div>
            <div className="footer-content">
                <div className="list-wrapper">
                    <div className="spacer"></div>
                    <div className="list-content">
                        <ul className="my-list">
                        {activeData.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
      </div>
    )
}