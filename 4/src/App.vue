<script>
    export default{
        setup(){
            return {
                message: "Summary",
                title1message: "16/06/2019 trip 1",
                title2message: "05/12/2018 trip 2",
                title3message: "04/10/2018 trip 3",
                title1: "trip 1",
                title2: "trip 2",
                title3: "trip 3",
                post1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sit itaque dicta incidunt! Similique quos quasi corrupti consequuntur officiis amet, adipisci dolor pariatur. Aperiam debitis repudiandae voluptas molestiae deleniti laborum.",
                post2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores non earum, quo aliquid accusantium laboriosam id deserunt repellat obcaecati vel distinctio, eos voluptatibus quibusdam? Illo quibusdam dolore eaque animi vitae.",
                post3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nam incidunt. Nobis ut doloremque eligendi excepturi distinctio asperiores architecto debitis atque sequi? Ipsa placeat temporibus ea quisquam autem ratione sequi.",
            }
        }
    }
</script>

<template>
    <h1>My vue blog</h1>
    <main>
        <h2>Content</h2>

        <h3>{{ title1 }}</h3>
        {{ post1 }}
    
        <h3>{{ title2 }}</h3>
        {{ post2 }}

        <h3>{{ title3 }}</h3>
        {{ post3 }}
    </main>
    <h2>{{ message }}</h2>
    <ul>
        <li>{{ title1message }}</li>
        <li>{{ title2message }}</li>
        <li>{{ title3message }}</li>
    </ul>
</template>