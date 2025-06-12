'use client'

import React from 'react'
import { StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Removed unused styledComponentsStyleSheet state

  return <StyleSheetManager>{children}</StyleSheetManager>
}
