export interface Risk {
    Risk_id:number;
    Risk_Category:string;
    Hazards:string[];
    Risks:string[];
    Mitigation_Status:boolean;
    Pre_mitigation_score:number;
    Post_mitigation_score:number;

    Barriers: string[];



}