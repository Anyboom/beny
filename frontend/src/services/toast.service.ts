import type { ToastServiceMethods } from "primevue";

export class ToastService {
    public constructor(private instance: ToastServiceMethods) {}

    showMessage(
        message: string,
        title: string,
        severity:
            | "error"
            | "success"
            | "secondary"
            | "info"
            | "contrast"
            | "warn",
    ): void {
        this.instance.add({
            severity: severity,
            summary: title,
            detail: message,
            life: 4000,
        });
    }

    showError(message: string, title: string = "Ошибка"): void {
        this.showMessage(message, title, "error");
    }

    showSuccess(message: string, title: string = "Успех"): void {
        this.showMessage(message, title, "success");
    }

    showSecondary(message: string, title: string = "Информация"): void {
        this.showMessage(message, title, "secondary");
    }

    showInfo(message: string, title: string = "Информация"): void {
        this.showMessage(message, title, "info");
    }

    showContrast(message: string, title: string = "Информация"): void {
        this.showMessage(message, title, "contrast");
    }

    showWarn(message: string, title: string = "Предупреждение"): void {
        this.showMessage(message, title, "warn");
    }
}
