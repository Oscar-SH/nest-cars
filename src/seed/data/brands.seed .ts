import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
    { id: uuid(), name: 'Volvo', created_at: new Date(), updated_at: new Date() },
    { id: uuid(), name: 'Honda', created_at: new Date(), updated_at: new Date() },
    { id: uuid(), name: 'Jeep', created_at: new Date(), updated_at: new Date() }
];