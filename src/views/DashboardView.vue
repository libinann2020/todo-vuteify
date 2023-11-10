<template>
  <div class="dashboard">
    <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
    <v-container>
      <v-row class="mb-3">
        <v-btn size="small" variant="flat" color="grey" @click="sortBy('title')">
          <v-icon start variant="small">mdi-folder</v-icon>
          <span class="caption text-lowercase">by project name</span>
          <v-tooltip activator="parent" location="top">Sort projects by project name
          </v-tooltip>
        </v-btn>
        <v-btn size="small" variant="flat" color="grey" class="ml-2" @click="sortBy('person')">
          <v-icon start variant="small">mdi-account</v-icon>
          <span class="caption text-lowercase">by person</span>
          <v-tooltip activator="parent" location="top">Sort projects by person
          </v-tooltip>
        </v-btn>
      </v-row>
      <v-card variant="flat" v-for="project in projects" :key="project.title">
        <v-row no-gutters :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6" class="flex-1-0">
            <div class="caption text-grey">
              Project Title
            </div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" class="flex-1-0">
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" class="flex-1-0">
            <div class="caption text-grey">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2" class="flex-1-0">
            <!-- <div class="caption text-grey">Status</div>
            <div>{{ project.status }}</div> -->
            <div>
              <v-chip size="small" :class="`${project.status} text-white my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <!-- <v-container class="my-5">
      <v-row no-gutters class="d-flex flex-md-nowrap">
        <v-col xs="12" md="6">
          <v-btn variant="outlined" block class="primary">1</v-btn>
        </v-col>
        <v-col xs="4" md="2">
          <v-btn variant="outlined" block class="primary">2</v-btn>
        </v-col>
        <v-col xs="4" md="2">
          <v-btn variant="outlined" block class="primary">2</v-btn>
        </v-col>

        <v-col xs="4" md="2">
          <v-btn variant="outlined" block class="primary">2</v-btn>
        </v-col>
      </v-row>
    </v-container> -->
    <!-- <p class="bg-blue-grey-lighten-2 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae culpa
      suscipit cum! Id
      mollitia amet suscipit sunt
      ex inventore fuga obcaecati, earum quo voluptas reiciendis nam architecto, cum ipsum dicta.</p>
    <h1 class="text-h1">Massive Display</h1>
    <h4 class="text-h5">Smaller Display</h4>
    <p class="text-h5">This is a headline</p>
    <p class="text-subtitle-2">This is a subheading</p>
    <p class="text-caption">This is a caption</p>
    <br />
    <br />
    <v-btn class="bg-pink">Click Me</v-btn>
    <br />
    <br />
    <v-btn variant="flat" color="pink-lighten-2">Click Me</v-btn>
    <br />
    <br />
    <v-btn variant color="purple darken-2">Click me!</v-btn>
    <br />
    <br />
    <v-btn variant="flat" class="bg-pink text-white">
      <v-icon start>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <br />
    <br />
    <v-btn variant="flat" size="small" class="bg-pink text-white">
      <v-icon start size="small">mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <br />
    <br />
    <v-btn variant="flat" size="large" class="bg-pink text-white">
      <v-icon start size="large">mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <br />
    <br />
    <v-btn variant="flat" icon size="small" class="bg-purple-darken-4">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <br />
    <br /> -->
    <!-- <v-btn class="hidden-md-and-down">Click me</v-btn> -->
    <!-- <v-btn class="hidden-md-and-up">Click me</v-btn> -->
  </div>
</template>

<script>
import { db } from "../fb.js";
import { collection, query, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      // projects: [
      //   { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      //   { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      //   { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      //   { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      // ]
      projects: []
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop]) ? -1 : 1)
    }
  },
  created() {
    const projectsCollection = query(collection(db, "projects"));

    onSnapshot(projectsCollection, { includeMetadataChanges: true }, (snapshot) => {
      const changes = snapshot.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });

  }
}
</script>
<style>
.project.completed {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid #ffaa2c;
}

.project.overdue {
  border-left: 4px solid #f83e70;
}

.v-chip.completed {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: #ffaa2c;
}

.v-chip.overdue {
  background: #f83e70;
}
</style>