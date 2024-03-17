class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong at crud service",error);
            throw {error};
        }
    }

    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong at crud service",error);
            throw {error};
        }
    }

    async get(id){
        try {
            const response = await this.repository.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong at crud service",error);
            throw {error};
        }
    }

    async getAll(){
        try {
            const response = await this.repository.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong at crud service",error);
            throw {error};
        }
    }

    async update(id,data){
        try {
            const response = await this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log("Something went wrong at crud service",error);
            throw {error};
        }
    }

}

module.exports = CrudService;