import { createContext, useState, useContext, ReactNode } from "react";

interface SidebarContextType {
    sidebar: boolean;
    setSidebar: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [sidebar, setSidebar] = useState(false);

    return (
        <SidebarContext.Provider value={{ sidebar, setSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar deve ser usado dentro de um SidebarProvider");
    }
    return context;
}
