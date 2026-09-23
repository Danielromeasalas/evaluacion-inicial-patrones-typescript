import type {Usuario, UsuarioDAO} from './interfaceDAO.js';

export class UsuarioDAOMemoria implements UsuarioDAO {
    private usuarios: Map<string, Usuario> = new Map();

    async insert(datos: Omit<Usuario, 'id'>): Promise<Usuario> {
        const id = crypto.randomUUID();
        const nuevoUsuario: Usuario = { id, ...datos };
        this.usuarios.set(id, nuevoUsuario);
        return nuevoUsuario;
    }

    async selectById(id: string): Promise<Usuario | null> {
        return this.usuarios.get(id) || null;
    }

    async selectAll(): Promise<Usuario[]> {
        return Array.from(this.usuarios.values());
    }

    async update(id: string, datos: Partial<Usuario>): Promise<Usuario | null> {
        const actual = this.usuarios.get(id);
        if (!actual) return null;

        const actualizado = { ...actual, ...datos, id };
        this.usuarios.set(id, actualizado);
        return actualizado;
    }

    async delete(id: string): Promise<boolean> {
        return this.usuarios.delete(id);
    }
}
