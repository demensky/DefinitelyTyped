declare namespace google.maps.visualization {
    /**
     * A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.
     * Requires the `&libraries=visualization` URL parameter. See
     * {@link https://developers.google.com/maps/documentation/javascript/libraries Libraries in the Maps JavaScript API}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization Maps JavaScript API}
     */
    class HeatmapLayer extends MVCObject {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.constructor Maps JavaScript API}
         * @see {@link setOptions}
         */
        constructor(opts?: HeatmapLayerOptions);

        /**
         * Returns the data points currently displayed by this heatmap.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.getData Maps JavaScript API}
         * @see {@link setData}
         * @see {@link HeatmapLayerOptions#data}
         */
        getData(): MVCArray<LatLng | WeightedLocation>;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.getMap Maps JavaScript API}
         * @see {@link setMap}
         * @see {@link HeatmapLayerOptions#map}
         */
        getMap(): Map;

        /**
         * Sets the data points to be displayed by this heatmap.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.setData Maps JavaScript API}
         * @see {@link getData}
         * @see {@link HeatmapLayerOptions#data}
         */
        setData(data: MVCArray<LatLng | WeightedLocation> | (LatLng | WeightedLocation)[]): void;

        /**
         * Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.setMap Maps JavaScript API}
         * @see {@link getMap}
         * @see {@link HeatmapLayerOptions#map}
         */
        setMap(map: Map | null): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer.setOptions Maps JavaScript API}
         */
        setOptions(options: HeatmapLayerOptions): void;
    }

    /**
     * This object defines the properties that can be set on a {@link HeatmapLayer} object.
     * Requires the `&libraries=visualization` URL parameter. See
     * {@link https://developers.google.com/maps/documentation/javascript/libraries Libraries in the Maps JavaScript API}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions Maps JavaScript API}
     */
    interface HeatmapLayerOptions {
        /**
         * The data points to display.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.data Maps JavaScript API}
         * @see {@link HeatmapLayer#getData}
         * @see {@link HeatmapLayer#setData}
         */
        data?: MVCArray<LatLng | WeightedLocation> | (LatLng | WeightedLocation)[];

        /**
         * Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is
         * specified by the radius option only. When dissipating is disabled, the radius option is interpreted as a
         * radius at zoom level 0.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.dissipating Maps JavaScript API}
         */
        dissipating?: boolean;

        /**
         * The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported
         * except for extended named colors.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.gradient Maps JavaScript API}
         */
        gradient?: string[];

        /**
         * The map on which to display the layer.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.map Maps JavaScript API}
         * @see {@link HeatmapLayer#getMap}
         * @see {@link HeatmapLayer#setMap}
         */
        map?: Map;

        /**
         * The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the
         * greatest concentration of points at any particular pixel on the map. This property allows you to specify a
         * fixed maximum.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.maxIntensity Maps JavaScript API}
         */
        maxIntensity?: number;

        /**
         * The opacity of the heatmap, expressed as a number between 0 and 1.
         * @default 0.6
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.opacity Maps JavaScript API}
         */
        opacity?: number;

        /**
         * The radius of influence for each data point, in pixels.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions.radius Maps JavaScript API}
         */
        radius?: number;
    }

    /**
     * A data point entry for a heatmap. This is a geographical data point with a weight attribute.
     * Requires the `&libraries=visualization` URL parameter. See
     * {@link https://developers.google.com/maps/documentation/javascript/libraries Libraries in the Maps JavaScript API}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#WeightedLocation Maps JavaScript API}
     */
    interface WeightedLocation {
        /**
         * The location of the data point.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#WeightedLocation.location Maps JavaScript API}
         */
        location: LatLng;

        /**
         * The weighting value of the data point.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/visualization#WeightedLocation.weight Maps JavaScript API}
         */
        weight: number;
    }
}
