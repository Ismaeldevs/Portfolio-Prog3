export type Props = {
    Nombre: string,
    Apellido: string,
    Desc: string,
}

export type ThemeContextType = {
    Theme: string,
    setTheme: (value: string) => void;
}