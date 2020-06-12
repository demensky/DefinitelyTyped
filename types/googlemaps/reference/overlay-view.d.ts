declare namespace google.maps {
    class OverlayView extends MVCObject {
        /**
         * Stops click, tap, drag, and wheel events on the element from bubbling up to the map. Use this to prevent map dragging and zooming, as well as map "click" events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsAndGesturesFrom Maps JavaScript API}
         */
        static preventMapHitsAndGesturesFrom(element: Element): void;

        /**
         * Stops click or tap on the element from bubbling up to the map. Use this to prevent the map from triggering "click" events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsFrom Maps JavaScript API}
         */
        static preventMapHitsFrom(element: Element): void;

        draw?(): void;

        getMap(): Map | StreetViewPanorama | undefined;

        getPanes(): MapPanes | undefined;

        getProjection(): MapCanvasProjection | undefined;

        onAdd?(): void;

        onRemove?(): void;

        setMap(map: Map | StreetViewPanorama | null | undefined): void;
    }

    /**
     * @see {@link MapPanes#mapPane Pane 0}
     * @see {@link MapPanes#overlayLayer Pane 1}
     * @see {@link MapPanes#markerLayer Pane 2}
     * @see {@link MapPanes#overlayMouseTarget Pane 3}
     * @see {@link MapPanes#floatPane Pane 4}
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes Maps JavaScript API}
     */
    interface MapPanes {
        /**
         * This pane contains the info window. (Pane 4).
         * It is above all map overlays.
         * @see {@link overlayMouseTarget pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.floatPane Maps JavaScript API}
         */
        readonly floatPane: Element;

        /**
         * This pane is the lowest pane and is above the tiles. (Pane 0).
         * It may not receive DOM events.
         * @see {@link overlayLayer pane above}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.mapPane Maps JavaScript API}
         */
        readonly mapPane: Element;

        /**
         * This pane contains markers. (Pane 2).
         * It may not receive DOM events.
         * @see {@link floatPane pane above}
         * @see {@link overlayLayer pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.markerLayer Maps JavaScript API}
         */
        readonly markerLayer: Element;

        /**
         * This pane contains polylines, polygons, ground overlays and tile layer overlays. (Pane 1).
         * It may not receive DOM events.
         * @see {@link markerLayer pane above}
         * @see {@link mapPane pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.overlayLayer Maps JavaScript API}
         */
        readonly overlayLayer: Element;

        /**
         * This pane contains elements that receive DOM events. (Pane 3).
         * @see {@link floatPane pane above}
         * @see {@link markerLayer pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.overlayMouseTarget Maps JavaScript API}
         */
        readonly overlayMouseTarget: Element;
    }

    /**
     * This object is made available to the {@link OverlayView} from within the draw method. It is not guaranteed to be
     * initialized until draw is called.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection Maps JavaScript API}
     */
    interface MapCanvasProjection {
        /**
         * Computes the geographical coordinates from pixel coordinates in the map's container.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromContainerPixelToLatLng Maps JavaScript API}
         */
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;

        /**
         * Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromDivPixelToLatLng Maps JavaScript API}
         */
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;

        /**
         * Computes the pixel coordinates of the given geographical location in the map's container element.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromLatLngToContainerPixel Maps JavaScript API}
         */
        fromLatLngToContainerPixel(latLng: LatLng): Point;

        /**
         * Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable
         * map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromLatLngToDivPixel Maps JavaScript API}
         */
        fromLatLngToDivPixel(latLng: LatLng): Point;

        /**
         * The width of the world in pixels in the current zoom level. For projections with a heading angle of either 90
         * or 270 degrees, this corresponds to the pixel span in the Y-axis.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.getWorldWidth Maps JavaScript API}
         */
        getWorldWidth(): number;
    }
}
