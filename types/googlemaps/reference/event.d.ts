declare namespace google.maps {
    namespace event {
        /**
         * Cross browser event handler registration. This listener is removed by
         * calling removeListener(handle) for the handle that is returned by this
         * function.
         */
        function addDomListener(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Wrapper around addDomListener that removes the listener after the first
         * event.
         */
        function addDomListenerOnce(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;

        /**
         * Adds the given listener function to the given event name for the given
         * object instance. Returns an identifier for this listener that can be used
         * with removeListener().
         */
        function addListener(instance: object, eventName: string, handler: (...args: any[]) => void): MapsEventListener;

        /**
         * Like addListener, but the handler removes itself after handling the first
         * event.
         */
        function addListenerOnce(
            instance: object,
            eventName: string,
            handler: (...args: any[]) => void,
        ): MapsEventListener;

        /**
         * Removes all listeners for all events for the given instance.
         */
        function clearInstanceListeners(instance: object): void;

        /**
         * Removes all listeners for the given event for the given instance.
         */
        function clearListeners(instance: object, eventName: string): void;

        /**
         * Removes the given listener, which should have been returned by
         * addListener above. Equivalent to calling listener.remove().
         */
        function removeListener(listener: MapsEventListener): void;

        /**
         * Triggers the given event. All arguments after eventName are passed as
         * arguments to the listeners.
         */
        function trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    interface MapsEventListener {
        /**
         * Removes the listener.  Equivalent to calling
         * google.maps.event.removeListener(listener).
         */
        remove(): void;
    }

    /**
     * The `MVCObject` constructor is guaranteed to be an empty function, and so you may inherit from `MVCObject` by
     * writing `MySubclass.prototype = new google.maps.MVCObject();`. Unless otherwise noted, this is not true of other
     * classes in the API, and inheriting from other classes in the API is not supported.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject Maps JavaScript API}
     */
    class MVCObject<T extends object = any> {
        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.constructor Maps JavaScript API}
         */
        constructor();

        /**
         * Adds the given listener function to the given event name. Returns an identifier for this listener that can be
         * used with {@link google.maps.event.removeListener}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.addListener Maps JavaScript API}
         */
        addListener(eventName: string, handler: (this: this, ...args: any[]) => void): MapsEventListener;

        /**
         * Binds a View to a Model.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.bindTo Maps JavaScript API}
         * @see {@link unbind}
         * @see {@link unbindAll}
         */
        bindTo<T2 extends object, K extends keyof T, K2 extends T2>(
            key: K,
            target: MVCObject<T2>,
            targetKey: K,
            noNotify?: boolean,
        ): void;
        /**
         * Binds a View to a Model.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.bindTo Maps JavaScript API}
         * @see {@link unbind}
         * @see {@link unbindAll}
         */
        bindTo<T2 extends object, K extends keyof (T & T2)>(
            key: K,
            target: MVCObject,
            targetKey?: undefined,
            noNotify?: boolean,
        ): void;

        /**
         * Gets a value.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.get Maps JavaScript API}
         * @see {@link set}
         */
        get<K extends keyof T>(key: K): T[K];

        /**
         * Notify all observers of a change on this property. This notifies both objects that are bound to the object's
         * property as well as the object that it is bound to.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.notify Maps JavaScript API}
         * @see {@link set}
         */
        notify(key: keyof T): void;

        /**
         * Sets a value.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.set Maps JavaScript API}
         * @see {@link get}
         * @see {@link notify}
         * @see {@link setValues}
         */
        set<K extends keyof T>(key: K, value: T[K]): void;

        /**
         * Sets a collection of key-value pairs.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.setValues Maps JavaScript API}
         * @see {@link set}
         */
        setValues(values: Partial<T>): void;

        /**
         * Removes a binding. Unbinding will set the unbound property to the current value. The object will not be
         * notified, as the value has not changed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.unbind Maps JavaScript API}
         * @see {@link bindTo}
         */
        unbind(key: keyof T): void;

        /**
         * Removes all bindings.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject.unbindAll Maps JavaScript API}
         * @see {@link bindTo}
         * @see {@link unbind}
         */
        unbindAll(): void;
    }

    interface MVCObjectValues {
        length: number;
    }

    /** This class extends MVCObject. */
    class MVCArray<T> extends MVCObject<MVCObjectValues> {
        /** A mutable MVC Array. */
        constructor(array?: T[]);

        /** Removes all elements from the array. */
        clear(): void;

        /**
         * Iterate over each element, calling the provided callback.
         * The callback is called for each element like: callback(element, index).
         */
        forEach(callback: (elem: T, i: number) => void): void;

        /**
         * Returns a reference to the underlying Array.
         * Warning: if the Array is mutated, no events will be fired by this object.
         */
        getArray(): T[];

        /** Returns the element at the specified index. */
        getAt(i: number): T;

        /** Returns the number of elements in this array. */
        getLength(): number;

        /** Inserts an element at the specified index. */
        insertAt(i: number, elem: T): void;

        /** Removes the last element of the array and returns that element. */
        pop(): T;

        /**
         * Adds one element to the end of the array and returns the new length of
         * the array.
         */
        push(elem: T): number;

        /** Removes an element from the specified index. */
        removeAt(i: number): T;

        /** Sets an element at the specified index. */
        setAt(i: number, elem: T): void;
    }
}
