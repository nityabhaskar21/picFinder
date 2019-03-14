import axios from 'axios';

export default axios.create({
    baseURL:'http://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID 0fdccd6c806a755ffaf4a14da8d5ba952f71acb7c4927345442a7a87163c8144 ',
    }
})