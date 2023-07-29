interface ISources {
    content: string;
    tool_name: string;
    raw_output: string[];
}
  
interface IAnswers {
    response: string;
    sources: ISources;
}
export interface IResults{
    question: string;
    answer: IAnswers;
}