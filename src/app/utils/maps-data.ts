import React from "react";
import Accord from "../pages/accordion/page";
import Lensky from '../components/Districts/District'
interface DataItem {
    id: number;
    content: React.ReactNode;
}
const data: DataItem[] = [
    { id: 0, content: React.createElement<typeof Accord>(Accord) },
    { id: 1, content: React.createElement<typeof Lensky>(Lensky) },
    { id: 2, content: 'Content for Котласский округ' },
    { id: 3, content: 'Content for Красноборский округ' },
    { id: 4, content: 'Content for Устьянский округ' },
    { id: 5, content: 'Content for Вельский район' },
    { id: 6, content: 'Content for Коношский район' },
    { id: 7, content: 'Content for Каргопольский округ' },
    { id: 8, content: 'Content for Няндомский округ' },
    { id: 9, content: 'Content for Шенкурский округ' },
    { id: 10, content: 'Content for Верхнетоемский округ' },
    { id: 11, content: 'Content for Плесецкий округ' },
    { id: 12, content: 'Content for Виноградовский округ' },
    { id: 13, content: 'Content for Пинежский округ' },
    { id: 14, content: 'Content for Холмогорский округ' },
    { id: 15, content: 'Content for Онежский район' },
    { id: 16, content: 'Content for Лешуконский округ' },
    { id: 17, content: 'Content for Мезенский округ' },
    { id: 18, content: 'Content for Приморский округ' },
];

export default data;
