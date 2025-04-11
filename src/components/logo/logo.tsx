import { LogoTypedLight } from "./assets/logo-typed-light";
import { LogoTypedDark } from "./assets/logo-typed-dark";
import { LogoIcon } from "./assets/logo-icon";
import { LogoFullLight } from "./assets/logo-full-light";
import { LogoFullDark } from "./assets/logo-full-dark";

type LogoVariant = "typed" | "icon" | "full";
type LogoTheme = "dark" | "light";
type LogoKey = `${LogoVariant}-${LogoTheme}`;

type LogoProps = {
  width?: number;
  height?: number;
  theme?: LogoTheme;
  variant?: LogoVariant;
  className?: string;
};



export const Logo = ({
  width,
  height,
  theme = "light",
  variant = "full",
  className,
}: LogoProps) => {
  // Mapeamento de componentes de logo baseado na variante e tema
  const logoComponents = {
    "typed-light": LogoTypedLight,
    "typed-dark": LogoTypedDark,
    "icon-light": LogoIcon,
    "icon-dark": LogoIcon,
    "full-light": LogoFullLight,
    "full-dark": LogoFullDark,
  };
  
  // Cria uma chave para selecionar o componente correto
  const logoKey = `${variant}-${theme}` as LogoKey;
  
  // Seleciona o componente correto
  const LogoComponent = logoComponents[logoKey];
  
  // Usa diretamente width e height fornecidos
  const finalWidth = width;
  const finalHeight = height;
  
  // Renderiza o componente selecionado com as props adequadas
  return <LogoComponent width={finalWidth} height={finalHeight} className={className} />;
}