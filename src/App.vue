<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container>
                    {{ range }}
                    <v-daterange
                            v-model="range"
                            display-format="dd-MM-yyyy"
                            no-title
                            :input-props="inputProps"
                            :menu-props="menuProps"
                            :presets="presets"
                            :action-labels="{ apply: 'Custom Apply' }"
                    >
                        <h3 slot="title">Vuetify Dater Range Picker - Next</h3>
                    </v-daterange>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>
<script>
    import VDaterange from '@/components/VDaterange';
    import {ISO_FORMAT} from './utils/constants';
    import {format, subDays, subMonths, addMonths, subYears, startOfYear, endOfYear, startOfMonth, endOfMonth} from 'date-fns';

    export default {
        name: 'app',
        components: {VDaterange},
        data() {
            return {
                range: {},
                inputProps: {solo: true, dense: true},
                menuProps: {offsetY: true, closeOnContentClick: false},
                presets: [
                    // {
                    //     label: 'Today',
                    //     range: [
                    //         format(new Date(), ISO_FORMAT),
                    //         format(new Date(), ISO_FORMAT)
                    //     ]
                    // },
                    // {
                    //     label: 'Yesterday',
                    //     range: [
                    //         format(subDays(new Date(), 1), ISO_FORMAT),
                    //         format(subDays(new Date(), 1), ISO_FORMAT)
                    //     ]
                    // },
                    // {
                    //     label: 'Last 30 Days',
                    //     range: [
                    //         format(subDays(new Date(), 30), ISO_FORMAT),
                    //         format(subDays(new Date(), 1), ISO_FORMAT)
                    //     ]
                    // },
                    {
                        label: 'This month',
                        range: [
                            format(startOfMonth(new Date()), ISO_FORMAT),
                            format(endOfMonth(new Date()), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'Last month',
                        range: [
                            format(startOfMonth(subMonths(new Date(), 1)), ISO_FORMAT),
                            format(endOfMonth(subMonths(new Date(), 1)), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'This year',
                        range: [
                            format(startOfYear(new Date()), ISO_FORMAT),
                            format(subDays(new Date(), 1), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'Last Year',
                        range: [
                            format(startOfYear(subYears(new Date(), 1)), ISO_FORMAT),
                            format(endOfYear(subYears(new Date(), 1)), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'First quarter',
                        range: [
                            format(startOfYear(new Date()), ISO_FORMAT),
                            format(endOfMonth(addMonths(startOfYear(new Date()), 2)), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'Second quarter',
                        range: [
                            format(addMonths(startOfYear(new Date()),3), ISO_FORMAT),
                            format(endOfMonth(addMonths(startOfYear(new Date()), 5)), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'Third quarter',
                        range: [
                            format(addMonths(startOfYear(new Date()),6), ISO_FORMAT),
                            format(endOfMonth(addMonths(startOfYear(new Date()), 8)), ISO_FORMAT)
                        ]
                    },
                    {
                        label: 'Fourth quarter',
                        range: [
                            format(addMonths(startOfYear(new Date()),9), ISO_FORMAT),
                            format(endOfMonth(addMonths(startOfYear(new Date()), 11)), ISO_FORMAT)
                        ]
                    },
                ]
            };
        }
    };
</script>
