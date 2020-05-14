declare namespace google.maps {
    namespace event {
        /**
         * Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the
         * handle that is returned by this function.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.addDomListener Maps JavaScript API}
         */
        function addDomListener(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Wrapper around addDomListener that removes the listener after the first event.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.addDomListenerOnce Maps JavaScript API}
         */
        function addDomListenerOnce(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Adds the given listener function to the given event name for the given object instance. Returns an identifier
         * for this listener that can be used with removeListener().
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.addListener Maps JavaScript API}
         */
        function addListener(instance: object, eventName: string, handler: (...args: any[]) => void): MapsEventListener;

        /**
         * Like addListener, but the handler removes itself after handling the first event.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.addListenerOnce Maps JavaScript API}
         */
        function addListenerOnce(
            instance: object,
            eventName: string,
            handler: (...args: any[]) => void,
        ): MapsEventListener;

        /**
         * Removes all listeners for all events for the given instance.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.clearInstanceListeners Maps JavaScript API}
         */
        function clearInstanceListeners(instance: object): void;

        /**
         * Removes all listeners for the given event for the given instance.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.clearListeners Maps JavaScript API}
         */
        function clearListeners(instance: object, eventName: string): void;

        /**
         * Removes the given listener, which should have been returned by addListener above. Equivalent to calling
         * listener.remove().
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.removeListener Maps JavaScript API}
         */
        function removeListener(listener: MapsEventListener): void;

        /**
         * Triggers the given event. All arguments after eventName are passed as arguments to the listeners.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#event.trigger Maps JavaScript API}
         */
        function trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    /**
     * An event listener, created by google.maps.event.addListener() and friends.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MapsEventListener Maps JavaScript API}
     */
    interface MapsEventListener {
        /**
         * Calling listener.remove() is equivalent to google.maps.event.removeListener(listener).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MapsEventListener.remove Maps JavaScript API}
         */
        remove(): void;
    }

    type MVCEventHandler<T extends MVCObject, A extends any[]> = (this: T, ...args: A) => void;

    /**
     * The MVCObject constructor is guaranteed to be an empty function, and so you may inherit from MVCObject by simply
     * writing MySubclass.prototype = new google.maps.MVCObject();. Unless otherwise noted, this is not true of other
     * classes in the API, and inheriting from other classes in the API is not supported.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject Maps JavaScript API}
     */
    class MVCObject {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.constructor Maps JavaScript API}
         */
        constructor();

        /**
         * Adds the given listener function to the given event name. Returns an identifier for this listener that can be
         * used with google.maps.event.removeListener.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.addListener Maps JavaScript API}
         */
        addListener(eventName: string, handler: MVCEventHandler<this, any[]>): MapsEventListener;

        /**
         * Binds a View to a Model.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.bindTo Maps JavaScript API}
         */
        bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;

        changed(key: string): void;

        /**
         * Gets a value.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.get Maps JavaScript API}
         */
        get(key: string): any;

        /**
         * Notify all observers of a change on this property. This notifies both objects that are bound to the object's
         * property as well as the object that it is bound to.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.notify Maps JavaScript API}
         */
        notify(key: string): void;

        /**
         * Sets a value.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.set Maps JavaScript API}
         */
        set(key: string, value: any): void;

        /**
         * Sets a collection of key-value pairs.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.setValues Maps JavaScript API}
         */
        setValues(values: any): void;

        /**
         * Removes a binding. Unbinding will set the unbound property to the current value. The object will not be
         * notified, as the value has not changed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.unbind Maps JavaScript API}
         */
        unbind(key: string): void;

        /**
         * Removes all bindings.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.unbindAll Maps JavaScript API}
         */
        unbindAll(): void;
    }

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray Maps JavaScript API}
     */
    class MVCArray<T> extends MVCObject {
        /**
         * A mutable MVC Array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.constructor Maps JavaScript API}
         */
        constructor(array?: T[]);

        /**
         * Removes all elements from the array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.clear Maps JavaScript API}
         */
        clear(): void;

        /**
         * Iterate over each element, calling the provided callback. The callback is called for each element like:
         * callback(element, index).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.forEach Maps JavaScript API}
         */
        forEach(callback: (elem: T, i: number) => void): void;

        /**
         * Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by
         * this object.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getArray Maps JavaScript API}
         */
        getArray(): T[];

        /**
         * Returns the element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getAt Maps JavaScript API}
         */
        getAt(i: number): T;

        /**
         * Returns the number of elements in this array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.getLength Maps JavaScript API}
         */
        getLength(): number;

        /**
         * Inserts an element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.insertAt Maps JavaScript API}
         */
        insertAt(i: number, elem: T): void;

        /**
         * Removes the last element of the array and returns that element.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.pop Maps JavaScript API}
         */
        pop(): T;

        /**
         * Adds one element to the end of the array and returns the new length of the array.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.push Maps JavaScript API}
         */
        push(elem: T): number;

        /**
         * Removes an element from the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.removeAt Maps JavaScript API}
         */
        removeAt(i: number): T;

        /**
         * Sets an element at the specified index.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCArray.setAt Maps JavaScript API}
         */
        setAt(i: number, elem: T): void;
    }
}
