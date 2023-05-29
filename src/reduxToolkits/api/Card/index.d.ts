export interface CardData {
    id: number;
    created_at: string;
    name: string;
    card_type: string;
    bank_id: number;
    payment_deadline: string;
    last_four: string;
    cut_off_date: string;
};

export interface CardDataInsert {
    name: string;
}