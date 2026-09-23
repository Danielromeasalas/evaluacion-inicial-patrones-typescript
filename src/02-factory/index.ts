import type { Notification } from './interfaceFactory.js';

class NotificacionEmail implements Notification {
    enviar(mensaje: string): void {
    console.log(`Enviando Email: ${mensaje}`);
    }
}

class NotificacionSMS implements Notification {
    enviar(mensaje: string): void {
    console.log(`Enviando SMS: ${mensaje}`);
    }
}

class NotificacionPush implements Notification {
    enviar(mensaje: string): void {
    console.log(`Enviando Push: ${mensaje}`);
    }
}

type TipoNotificacion = 'email'|'sms'|'push';

class NotificacionFactory {
    static crear(tipo: TipoNotificacion): Notification {
    switch (tipo) {
        case 'email':
            return new NotificacionEmail();
        case 'sms':
            return new NotificacionSMS();
        case 'push':
        return new NotificacionPush();

        default:
            const _exhaustivo: never = tipo;
            throw new Error(`Tipo no soportado: ${_exhaustivo}`);
    }
    }
}
