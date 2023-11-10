<template>
    <div class="team">
        <h1 class="text-subtitle-1 text-grey">Team</h1>
        <v-container class="my-5">
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim temporibus amet qui! Quam modi
                inventore a voluptate harum. Architecto esse dolores ad, ratione ipsa eos mollitia enim ipsum reiciendis.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis error sit repellat ab
                perferendis eligendi rerum aperiam. Quo animi, ab ea recusandae asperiores tempore a in minus voluptatum
                similique!</p> -->
            <v-row>
                <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card variant="flat" class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar>
                                <v-img :src="person.avatar"></v-img>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="text-subtitle-1">{{ person.name }}</div>
                            <div class="text-grey">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn variant="flat" color="text-grey">
                                <v-icon size="small" start>mdi-message-text-outline</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  

<script>
export default {
    data() {
        return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
                { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
                { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
                { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
                { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }

            ]
        }
    }
}
</script>
