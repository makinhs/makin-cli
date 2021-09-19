declare class PrettierLintService {
    getPrettierDescription(): string;
    getLintDescription(): string;
    configPrettier(): Promise<void>;
    configLint(): Promise<void>;
}
declare const _default: PrettierLintService;
export default _default;
