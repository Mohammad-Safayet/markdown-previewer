import { ReactNode } from "react";

export interface globalContext {
  markdownText: string,
  setMarkdownText: any
}

export interface ContainerProps {
  title: string;
  children: ReactNode;
}
