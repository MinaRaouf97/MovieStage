import React, { useContext } from "react";
import { LanguageContext } from "../context/changeLanguage";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setContextLang(contextLang === "en" ? "ar" : "en")}
      >
        {contextLang}
      </button>
    </div>
  );
}
