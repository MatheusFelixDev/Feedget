export interface FeedbackCreateData{
    type: string;
    commet: string;
    screenshot?: string;
}

export interface FeedbacksRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
}