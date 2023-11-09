<script setup>
import { useConfirmDialog } from "~/composables";

const { visible, options, accept, decline } = useConfirmDialog();
</script>

<template>
  <v-dialog
    v-model="visible"
    persistent
    max-width="400px"
  >
    <v-card>
      <v-card-title v-if="options.title">
        <span class="font-bold">{{ options.title }}</span>
      </v-card-title>
      <v-card-text>
        {{ options.text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          variant="flat"
          color="primary"
          size="small"
          @click="accept()"
        >
          {{ options.acceptText }}
        </v-btn>
        <v-btn
          variant="outlined"
          color="primary"

          size="small"
          @click="decline()"
        >
          {{ options.rejectText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
