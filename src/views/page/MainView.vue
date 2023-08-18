<template>
    <v-container fluid>
        <v-card flat>
            <v-text-field
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="solo"
            ></v-text-field>
        </v-card>
        <v-card
        class="mx-auto">

        <b>Sporify chart</b>
            <v-list lines="one">
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :prepend-avatar="item.img"
                >
                <v-row>
                    <v-col cols="8">
                        {{ item.title }}
                    </v-col>
                    <v-col cols="4">
                        {{ item.artist }}
                    </v-col>
                </v-row>
                </v-list-item>
            </v-list>
        </v-card>
        <br>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <b>Popular Artist</b>
                    <v-row>
                        <v-col
                        v-for="n in 4"
                        :key="n"
                        cols="3"
                        >
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                cover
                                class="bg-grey-lighten-2"
                            ></v-img>
                            sakura
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <b>Popular Genre</b>
                    <v-row>
                        <v-col
                        v-for="n in 4"
                        :key="n"
                        cols="3"
                        >
                            <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                cover
                                class="bg-grey-lighten-2"
                            ></v-img>
                            sakura
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    setup() {
        const items =[
            {
                title: 'アイドル',
                artist: "YOASOBI",
                value: 1,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Jung Kook',
                title: "Seven (w/ Latto)",
                value: 2,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Tatsuya Kitani',
                title: "青のすみか",
                value: 3,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Vaundy',
                title: "怪獣の花唄",
                value: 4,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'SPITZ',
                title: "美しい鰭",
                value: 5,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Mrs. GREEN APPLE',
                title: "青と夏",
                value: 6,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Mrs. GREEN APPLE',
                title: "Magic",
                value: 7,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Mrs. GREEN APPLE',
                title: "ダンスホール",
                value: 8,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'MY FIRST STORY',
                title: "I'm a mess",
                value: 9,
                img: "https://picsum.photos/500/300?image=15",
            },
            {
                artist: 'Soushi Sakiyama',
                title: "燈",
                value: 10,
                img: "https://picsum.photos/500/300?image=15",
            },
        ]

        return {items}
    }
}
</script>

<style>
</style>