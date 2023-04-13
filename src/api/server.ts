const token = "56397abebb9172d28a001f28fc42350647543b638452da92"
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://mirage-first-freeze.glitch.me/api/whiskeys`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://mirage-first-freeze.glitch.me/api/whiskeys`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://mirage-first-freeze.glitch.me/api/whiskeys/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('failed to update data on server')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://mirage-first-freeze.glitch.me/api/whiskeys/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('failed to update on server')
        }
        return;
    }
    
}