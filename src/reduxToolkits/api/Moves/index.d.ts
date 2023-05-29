export interface MovesData {
    id: number;
    created_at: string;
    move_date: number;
    due_id: number;
    card_id: number;
    subcategory_id: number;
};

export interface MovesInsert {
    name: string;
}