
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Persianas' | 'Cortinas' | 'Motorización' | 'Sostenibilidad';
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
}
