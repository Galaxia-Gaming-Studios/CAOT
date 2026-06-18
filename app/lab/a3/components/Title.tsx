import React from 'react'

interface Props {
  title: string;
  titleText: string;
}

export default function Title(titlePage: Props) {
  return (
      <div className="title-card">
        <h1 className="title">{titlePage.title}</h1>
        <p className="title_text">{titlePage.titleText}</p>
      </div>
  )
}