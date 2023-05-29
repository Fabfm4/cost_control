export interface DueMovesData {
    id: number;
    created_at: string;
    due_move_date: string;
    current_due: boolean;
    total_amount: number;
    due_amount: number;
    card_id: number;
    subcategory_id: number;
};

export interface DueMovesInsert {
    name: string;
}