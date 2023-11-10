<template>
    <v-btn variant="flat" color="success" @click="dialog = true">Add new project
        <v-dialog width="600px" v-model="dialog">
            <v-card>
                <v-card-title>
                    <h2>Add a new project</h2>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" @submit.prevent class="px-3">
                        <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"
                            :rules="inputRules"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"
                            :rules="inputRules"></v-textarea>

                        <!-- <v-menu v-model="menu" :close-on-content-click="false">
                            <v-text-field activator="parent" :rules="inputRules" :value="formattedDate" clearable
                                label="Due date" prepend-icon="date_range">
                            </v-text-field>
                            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
                        </v-menu> -->
                        <v-row justify="center">
                            <v-date-picker width="400"></v-date-picker>
                        </v-row>
                        <v-text-field v-model="due" label="Due date" prepend-icon="mdi-calendar-range"></v-text-field>

                        <v-btn type="submit" block class="mt-2" @click="submit" :loading="loading">Submit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-btn>
</template>
  
<script>
import format from 'date-fns/format'
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../fb.js";

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            showDatePicker: false,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                this.loading = true;
                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.due,
                    person: 'The Net Ninja',
                    status: 'ongoing'
                };

                try {
                    // Add a new document with a generated id
                    const newProjectRef = doc(collection(db, "projects"));
                    // later...
                    await setDoc(newProjectRef, project);
                    console.log('Project added to Firestore');
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                } catch (error) {
                    console.error('Error adding project to Firestore:', error);
                    // Handle the error or show an error message to the user
                }
            }
        }
    },
    computed: {
        formattedDate() {
            console.log(this.due)
            return this.due ? format(this.due, 'YYYY-MM-DD') : ''
        }
    }
}
</script>
  