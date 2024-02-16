export interface Risk {
    RiskId:number;
    RiskCategory:string;
    Hazards:string[];
    Risks:string[];
    MitigationStatus:boolean;
    PreMitigationScore:number;
    PostMitigationScore:number;

    Barriers: string[];



}