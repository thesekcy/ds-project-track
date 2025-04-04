type CardProps = {
    title: string;
    description: string;
    /** URL da imagem do card (opcional) */
    imageUrl?: string;
    /** Texto alternativo para a imagem */
    imageAlt?: string;
    /** Variante de estilo do card */
    variant?: 'default' | 'outlined' | 'elevated';
    /** Tamanho do card */
    size?: 'small' | 'medium' | 'large';
    /** Tags para exibir no rodapé do card (opcional) */
    tags?: string[];
    /** Texto do botão de ação (opcional) */
    actionButtonText?: string;
    /** Função de callback para o botão de ação */
    onActionClick?: () => void;
}

export const Card = ({ 
    title, 
    description, 
    imageUrl = "https://v1.tailwindcss.com/img/card-top.jpg", 
    imageAlt = "Card image", 
    variant = "default", 
    size = "medium", 
    tags = [], 
    actionButtonText, 
    onActionClick 
}: CardProps) => {
    // Definir classes com base na variante
    const variantClasses = {
        default: "bg-white shadow-lg",
        outlined: "bg-white border border-gray-300",
        elevated: "bg-white shadow-xl"
    };

    // Definir classes com base no tamanho
    const sizeClasses = {
        small: "max-w-xs",
        medium: "max-w-sm",
        large: "max-w-md"
    };

    return (
        <div className={`${sizeClasses[size]} rounded overflow-hidden ${variantClasses[variant]}`}>
            {imageUrl && (
                <img className="w-full" src={imageUrl} alt={imageAlt} />
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            {tags.length > 0 && (
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))}
                </div>
            )}
            {actionButtonText && (
                <div className="px-6 py-4">
                    <button 
                        onClick={onActionClick} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {actionButtonText}
                    </button>
                </div>
            )}
        </div>
    )
}


