import React from 'react'

const LanguagePage = ({language,onChangeLanguage}) => {
    return (
        <div>
          <label className="label">Select Language</label>
          <div className="opts">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <div
                  key={label}
                  className={`opt ${language === value ? "selected" : ""}`}
                  onClick={() => onChangeLanguage(value)}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    const LANGUAGES = [
      { label: "Afrikaans", value: "af" },
      { label: "Arabic", value: "ar" },
      { label: "French", value: "fr" },
      { label: "Hindi", value: "hi" },
      { label: "Japanese", value: "ja" },
      { label: "Portuguese", value: "pt" },
      { label: "Russian", value: "ru" },
      { label: "Simplified Chinese", value: "zh-CN" },
      { label: "Spanish", value: "es" },
      { label: "Swahili", value: "sw" },
      { label: "Thai", value: "th" }
    ];
    

export default LanguagePage