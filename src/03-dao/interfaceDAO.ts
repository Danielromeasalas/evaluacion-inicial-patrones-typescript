export interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

export interface UsuarioDAO {
    crear(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    obtenerPorId(id: string): Promise<Usuario | null>;
    obtenerTodos(): Promise<Usuario[]>;
    actualizar(id: string, datos: Partial<Usuario>): Promise<Usuario | null>;
    eliminar(id: string): Promise<boolean>;
}