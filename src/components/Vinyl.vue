<template>
    <div class="vinyl">
        <span class="general">
            <img :class="$props.item.ownDate ? 'compact' : 'original'" :src="`/vinyl/${$props.item.img}`" draggable="false">
            <div class="section">
                <div class="txt">
                    <p class="name">{{ $props.item.name }}</p>
                    <p class="artist">{{ $props.item.artist }}</p>
                    <p class="date">{{ new Date($props.item.ownDate ?? $props.item.wishDate).toLocaleDateString("fr") }}</p>
                </div>
            </div>
        </span>
        <span class="actions">
            <a style="background: #121212;" :href="$props.item.discogs" v-if="$props.item.discogs">Discogs</a>
            <a :href="$props.item.available?.official" v-if="$props.item.available?.official">Official</a>
            <a style="background: #f5b027; color: #000;" :href="$props.item.available?.fnac" v-if="$props.item.available?.fnac">Fnac</a>
            <a style="background: #0578ff; color: #fff;" :href="$props.item.available?.amazon" v-if="$props.item.available?.amazon">Amazon</a>
        </span>
    </div>
</template>

<style scoped>
.vinyl {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #ffffff10;
    width: 65vw;
    padding: 25px;
    border-radius: 25px;
}

.vinyl > span {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
    gap: 10px;
}

.vinyl img {
    width: 20vw;
    border-radius: 8px;
}

.vinyl img.compact {
    width: 200px;
}

.vinyl .section {
    padding: 1em 2em;
    max-width: calc(65vw - (25px * 2));
}

.vinyl .section .actions {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.vinyl .name {
    font-size: 1.9em;
    font-weight: 700;
    font-variation-settings: "slnt" 0, "wdth" 150;
    overflow-wrap: break-word;
}

.vinyl .date {
    color: hsla(0, 0%, 100%, 0.25);
    padding-top: 0.7em;
}

@media screen and (max-width: 1100px) {
    .vinyl {
        width: 90vw;
    }

    .vinyl > span.general {
        flex-direction: column;
    }

    .vinyl img, .vinyl img.compact {
        width: 100%;
        height: unset;
    }

    .vinyl .section {
        padding: 1em 0;
        max-width: calc(90vw - (25px * 2));
    }

    .vinyl .name {
        font-size: 1.6em;
    }
}
</style>

<script>
export default {
    name: "VinylComponent",
    props: {
        item: { name: String, artist: String, ownDate: Date|null, wishDate: Date|null, img: String  },
    }
}
</script>