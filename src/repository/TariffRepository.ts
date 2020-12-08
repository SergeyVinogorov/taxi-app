import { TariffDto } from "./TariffDto";
import { reflection } from "first-di";

@reflection // заставляет typescript генерировать рефлексию
export class TariffRepository {
    public async requestTariffs(): Promise<TariffDto[]> {
        const response = await fetch("./api/tariffs");
        const objects: object[] = await response.json();
        return objects.map((object: object) => {
            return new TariffDto().fromJSON(object);
        });
    }

    /**
     * ... множество других методов для работы с хранилищем тарифов
     */
}