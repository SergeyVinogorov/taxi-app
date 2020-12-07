export class TariffService {
    // получение данных
    public async getTariffs(): Promise<any> {
        const response = await fetch("./api/tariffs");
        return await response.json();
    }

    // метод с бизнес логикой
    public async findBestTariff(userProfile: any): Promise<any> {
        const tariffs = await this.getTariffs();
        return tariffs.find((tarif: any) => {
            return tarif.ageFrom <= userProfile.age &&
                userProfile.age < tarif.ageTo;
        });
    }
    
    /**
     * ... множество других методов для работы с тарифами
     */
}