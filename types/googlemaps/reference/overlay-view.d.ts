declare namespace google.maps {
    /**
     * You can implement this class if you want to display custom types of overlay objects on the map.
     *
     * Inherit from this class by setting your overlay's prototype:
     * `MyOverlay.prototype = new google.maps.OverlayView();`.
     *
     * The {@link OverlayView} constructor is guaranteed to be an empty function.
     *
     * You must implement three methods: {@link OverlayView#onAdd onAdd()}, {@link OverlayView#draw draw()}, and
     * {@link OverlayView#onRemove onRemove()}.
     *
     *   - In the {@link OverlayView#onAdd onAdd()} method, you should create DOM objects and append them as children of
     *     the panes.
     *   - In the {@link OverlayView#draw draw()} method, you should position these elements.
     *   - In the {@link OverlayView#onRemove onRemove()} method, you should remove the objects from the DOM.
     *
     * You must call {@link OverlayView#setMap setMap()} with a valid {@link google.maps.Map Map} object to trigger the
     * call to the {@link OverlayView#onAdd onAdd()} method and {@link OverlayView#setMap setMap(null)} in order to
     * trigger the {@link OverlayView#onRemove onRemove()} method. The {@link OverlayView#setMap setMap()} method can be
     * called at the time of construction or at any point afterward when the overlay should be re-shown after removing.
     * The {@link OverlayView#draw draw()} method will then be called whenever a map property changes that could change
     * the position of the element, such as zoom, center, or map type.
     *
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView Maps JavaScript API}
     */
    class OverlayView extends MVCObject {
        /**
         * Stops click, tap, drag, and wheel events on the element from bubbling up to the map. Use this to prevent map
         * dragging and zooming, as well as map {@link MapHandlerMap#click "click"} events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsAndGesturesFrom Maps JavaScript API}
         * @see {@link preventMapHitsFrom}
         */
        static preventMapHitsAndGesturesFrom(element: Element): void;

        /**
         * Stops click or tap on the element from bubbling up to the map. Use this to prevent the map from triggering
         * {@link MapHandlerMap#click "click"} events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsFrom Maps JavaScript API}
         * @see {@link preventMapHitsAndGesturesFrom}
         */
        static preventMapHitsFrom(element: Element): void;

        /**
         * Implement this method to draw or update the overlay. Use the position from
         * projection.{@link MapCanvasProjection#fromLatLngToDivPixel fromLatLngToDivPixel}() to correctly position the
         * overlay relative to the {@link MapPanes}. This method is called after {@link onAdd}(), and is called on
         * change of zoom or center. It is not recommended to do computationally expensive work in this method.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.draw Maps JavaScript API}
         */
        draw?(): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.getMap Maps JavaScript API}
         * @see {@link setMap}
         */
        getMap(): Map | StreetViewPanorama | undefined;

        /**
         * Returns the panes in which this {@link OverlayView} can be rendered. The panes are not initialized until
         * {@link onAdd} is called by the API.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.getPanes Maps JavaScript API}
         */
        getPanes(): MapPanes | undefined;

        /**
         * Returns the {@link MapCanvasProjection} object associated with this {@link OverlayView}. The projection is
         * not initialized until {@link onAdd} is called by the API.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.getProjection Maps JavaScript API}
         */
        getProjection(): MapCanvasProjection | undefined;

        /**
         * Implement this method to initialize the overlay DOM elements. This method is called once after
         * {@link setMap}() is called with a valid map. At this point, panes and projection will have been initialized.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.onAdd Maps JavaScript API}
         * @see {@link onRemove}
         */
        onAdd?(): void;

        /**
         * Implement this method to remove your elements from the DOM. This method is called once following a call to {@link setMap}(null).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.onRemove Maps JavaScript API}
         * @see {@link onAdd}
         */
        onRemove?(): void;

        /**
         * Adds the overlay to the map or panorama.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.setMap Maps JavaScript API}
         * @see {@link getMap}
         */
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
         * @see {@link fromLatLngToContainerPixel}
         * @see {@link fromDivPixelToLatLng}
         */
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;

        /**
         * Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromDivPixelToLatLng Maps JavaScript API}
         * @see {@link fromLatLngToDivPixel}
         * @see {@link fromContainerPixelToLatLng}
         */
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;

        /**
         * Computes the pixel coordinates of the given geographical location in the map's container element.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromLatLngToContainerPixel Maps JavaScript API}
         * @see {@link fromContainerPixelToLatLng}
         * @see {@link fromLatLngToDivPixel}
         */
        fromLatLngToContainerPixel(latLng: LatLng): Point;

        /**
         * Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable
         * map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection.fromLatLngToDivPixel Maps JavaScript API}
         * @see {@link fromDivPixelToLatLng}
         * @see {@link fromLatLngToContainerPixel}
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
