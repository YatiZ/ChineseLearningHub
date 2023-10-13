import React, { useState } from 'react'
import FieldInput from './Field'
import LanguagePage from './language'
import Translaion from './Translaion'

const DiMainPage = () => {
  const [text, setText] = useState('es')
  const [language, setLanguage] = useState('')

  return (
    <div>DiMainPage

        <FieldInput onChange={setText}/>
        <LanguagePage language={language} onChangeLanguage = {setLanguage} />
        <Translaion text={text} language={language} />
    </div>
  )
}

export default DiMainPage