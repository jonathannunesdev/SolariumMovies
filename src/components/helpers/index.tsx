// Calcula a porcentagem de classificação com base na classificação e classificação máxima fornecidas.
export const calcpercentageRating = (classification: number, MaxRating: number): number => {
    const percentage = (classification / MaxRating) * 100;
    return percentage;
};
  

// Retorna somente o ano de data fornecida
export  const getYear = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();

    return `${year}`;
};


// Converte a data para o formato dd/mm/yyyy brasileiro.
export  const convertDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
};

export const calculateAge = (dateString: string) => {
    const birthDate = new Date(dateString);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
};


// Retorna a URL do trailer com base na informação recebida.
export const getTrailerUrl = (key: string): string => {
    const baseUrl = 'https://www.youtube.com/embed/';
    return `${baseUrl}${key}`;
};


// Filtra itens por popularidade, removendo duplicatas e itens sem popularidade
export  const filterPopularity = (items: any[]) => {
    return items
    .filter((item, index, self) => 
        self.findIndex(other => other.id === item.id) === index)
    .filter((item) => item.popularity)
    .sort((a, b) => b.popularity - a.popularity);
};
