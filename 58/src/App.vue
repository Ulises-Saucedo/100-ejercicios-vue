<script>
  export default {
    setup(){
      const desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
      ]
      return {
        desserts
      }
    }
  }
</script>

<template>
  <v-container>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>