'use client'

import React, { useState } from 'react'
import { StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => {
    const sheet = typeof window === 'undefined' ? null : new CSSStyleSheet()
    return sheet
  })

  return <StyleSheetManager>{children}</StyleSheetManager>
}
