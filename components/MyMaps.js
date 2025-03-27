import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
const MapMaps = (props) => {
    const mapRef = useRef(null);
    let currentMaker = useRef(null)
    const [mapCofig, setMapCofig] = useState({
        center: props.center || { lat: 40.7129217, lng: -74.0067074, },
        zoom: props.zoom || 12,
        width: props.width || '100%',
        height: props.height || '100%'
    })
    const [isUpdate, setIsUpdate] = useState(0)
    useEffect(() => {
        if (isUpdate) {
            router.push({ pathname: '/IncidentDetail', query: {} })
        }
    }, [isUpdate])
    const router = useRouter()
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBqyC579khCDNWihQhLbZWRD6OZGZy8GdI&callback=initMap&libraries=&v=weekly`;
        script.defer = true;
        script.async = true;

        document.body.appendChild(script);
        let styles = [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]

        window.initMap = () => {
            const map = new google.maps.Map(mapRef.current, {
                center: mapCofig.center,
                zoom: mapCofig.zoom,
                disableDefaultUI: true,
                mapId: '92ff37d3af0e19c3',
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_style']
                }
            });
            map.mapTypes.set('custom_style', new google.maps.StyledMapType(styles, {
                name: "Custom Style"
            }));
            map.setMapTypeId('custom_style');
            var markers = [
                {
                    position: { lat: 40.7633477, lng: -74.0343854 },
                    icon: {
                        url: 'data:image/png;base64,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',
                        scaledSize: new google.maps.Size(56, 56)
                    },
                    title: 'Marker 1'
                },
                {
                    position: { lat: 40.693477, lng: -74.0351854 },
                    icon: {
                        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAAAXNSR0IArs4c6QAABadJREFUeAHtnL1uVEcUgF3wAC7yAEjkAQL0sRU60pGCdEQIauM8QICUoTBJA52DBG0MoXHj2HJDgSWLFKQIkqFwilAgRaKhOdlvNeO9u/ec+Vnv/dl7d6TV7F7fn5nvnnPmzJwzXlqquYjIsoisisiaiGyKyJaIHLmPTBSOH4rIrohsuGtWa25yfY9zYO64Dk+wmPon8ID9RX09qeBJTnKAg0RUXZC8ayJytoKuVHNLGuvU5EPVdIz7o87tBeYkiEa2pbQPmIjcGtiLpiQo9GJo051qdCfjrk7NMKpZ5dOH/+T46R/yav2eHFz/QXYuXpXtc5fltzPnxz4c2//qhry4si6v7z4cXvPx7XHWs9zJ2LBm1DFXiv7deymv7z4YQpkEkvsbsEDOhIZ03cqQg9OfOrBH91NeK5Lz9tdnQ6nIhZF6PtDePfo9pTn+nOpV0RlsHMRo+fvnx/L8sy/HVCm189Oct/351znA6MPy6UVGuYODFPWJUDHN3kzT+WmuAdj7vZfRF+n8u9nCSoGEmr1a/6k2CYpB/PP7e0KbIoUXPztYbj5mPvPj0XGjUmRBQ7oSDP6WokD5h/BDTEIigqrVaYssKNZx2pagihv5ZApXOBfA5PTu0bPWqJoFyh9PGBmncx2cM2l62/MEKREWfc13So31oaF0oW7+4fNWR9Rwt6BQ8a8hu4ThbrNNir042h4x8GkqGFI5htsmfaQYhNS/MxoGXAdUMO4yuOVZ1YC3yU9KhWKdh58VKJtBvXPSpF4/z3bJghWxV7ZhD0lTF1RuEhgqGCi6bxWSJlYAJh/Sld9M3o2i2yoR+c64oBMG3HqxjIIBw367ZKssv6nL0uThBbz2wzFQxMYsadq5cLWzaudB7V+6YXWf46OAqwsklk7GufQ363odGAFH6mdFcFmX7jog3z+CF0YZTWuME6QPaudB7Vz81sLA8eUllxdQOqlPaudhBUa/VUCR6FAqxN38DfpS//PUDFGuAYp0mlJBZ/sCyPcTm2yUTUCpGInO+hv0pT64ftvgJFuAUkNQhLL7Asj3M2DQjwBFXL5UujgJ9kCsevucOUkegipB4oB1s64fV2EMlnyRKLV0HYjVPxXGAtR4mhHwrLKQqImcrBCohTF3sGLGXAXVp3met1f7l25aAnWI6qn5TqQM+hv0pX7xzboFahdQaiZvn5ZYvCAEllo2ALWYFDsbFZsUsy+lVFhy8KT7UgdC7StIFJt41NIngx6Y58lJgMFaQejTUktgiWVsKVhdX2DBfaF2slaUKNVOoY+EcroOK6R2pW1u1rpUzwOgRyfS5L8MpEdVP0a/eU4ci2lDJFHjmudzUrvRT83ZJJEh9sB5/XsgnI7l0VN/rEADV3RxxTMiTXYyWSj1p4sj4Pu9A2TAKro0eR205n7crUvzv1OlJgIrZKsw7F1QwYRk17A0FaSKra9q6UH69Ch7xQMJ1da0BnrzbK8idqnsN4Ug8Tdn2FV3AViLLR4Fgj3bNDSa0xUYJH8N+VZeDdvsudO2iLrRjTy7ZNGz1tV5AgUD38bRkNEtsBjnWi+z2dgIPOcyqMkc/mm4Dm3ysxrZKpsKC2iMiE1KF1KUoGo0dbb7iYvq6CRLDW95yfI1yzN1AsMWvfnliX98rK5uO/8EMHVJRmsdwFgYq2p1gaAlKwCofmLR97gUOzjL77n/cgSDjw2bBTTu8dePD1NVzPPDJzydCzAtQOeUqiF53zqtBhoxNIIXRGeRCuL+k1LHMaCQMghkrsmQnOKjSb9Mm79NCyPlukGLUEXTiy+2uObvzUmRBc5JlxqerxmOfxxtiW95tTpU9fGGgSFBpIM3r2apoB0w9gBm2zAvEhk1PhHq314JSgHntrmRDKLmtGcAKZ7KvYCzktKGuTvHOa0rLosGNaHDSIQmeRzjg4OIzQE219YuOf8DDA1q4atTbwgAAAAASUVORK5CYII=',
                        scaledSize: new google.maps.Size(37, 37)
                    },
                    title: 'Marker 2'
                },
                {
                    position: { lat: 40.7283477, lng: -73.9800543 },
                    icon: {
                        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAAAXNSR0IArs4c6QAACUxJREFUeAHtXT2vG0UUtbRrRJmCH4AUfsCs6UlEOigSQUOXCCU/IPwAXkKb4pEKuvcigZDIs52EJg0xek0KkBwoQqQUToqkgMIIKQ2N0Vl71rPjmdnZXe/uvWOvZO33x8yZe+ece2fXvR7DaXxGnBn3hRhG4so4Fgfj/uBoFCeTUZTM0l+czEdxstB+89W+KY7FOTj3JBKXcC2G1cDnkQFYClZ/cDiKEwCgg7Ot9WnaGPri8vht8S6fGiL4pONYnB/GgxsNA1YEPAA9vBuL8wSriN4jpZYG0OAKm7OyItDM+/vJDGDuLdPQbmBtY/Rh1ECzP88EfaehKLu1adgHCWm0TzNbkx2Ycsf3k9moLy7vFmq9Xu/kLXFphMJvqyK7vs6uAMnQVZa2yCD7SJCTUTz4OhiLK7D4VGOGIkNgdUG5ywLwskbK3a3umtVlwGkAj+PB4VFPnGFFdNAP7KTVaeBloEJDcnGpw/7gysgciyxHCGyVwXf7nLx2XIW+dh0oZ/nvxoMbJN3pLrHMzDVW9AbkQDyJkuO6hdq184fR4IiEJe7Bq57a6hzEPXjVwZMepzMQQyAsP73zweL367cWz29/v/jt8y+d5ENWeBNzaMVW3WkI4AGIf548W6jTyzv3OwOxNWKTZhIqsq8mWm/Va/751bcqdtnyw7MfdQZi46mpNMISgEh/+N7HGWD6wumHV7sDME7mjUVs0thmADk89HtvXrzSccvWsb+qVW/lvH4yayR2GopQf3nnQQaWvjB/8qxb8FZd09ZJDYY+bKV1ddx3gmm6plf3HpEAEHW9tZFwoWQW0O+5XCeAhaQg01C35UpXo57pFKyiFeuSwWSJHROYjTqu7UpXrHPjwmRaqSeYNsmgg9g5gTGUp5YrDSEp65IMKoBUCIzBOCaVojQhEJciyaACSInA6CBWSgSHYH0uyaCCh2VSBEZ3pf1kVsoKQ7C+IsmgA0iNwOhWWCrMxt36fCSDDiBFAqOBOPWyQvhb7UR2LNRHMqgAEiYwubr3YqTM3hLKFRANzyUZnt/+TsUtW6ZMYDRjcjNS7rrPJRle33u0OL1wLQNNXSBNYDRC4wx0j2OBV5g3WjWHbS7J8Gb2aoE839Ob5hwgeQKjYDKMxYG1L+RMXlySQQ6XeH1vohpetsyAwKyNKrJIivQlFAVpDlYnn9ElGdDvyeNMwWwuBEaWAXMjmeHqPl2SAa5TFhxWZpoYEZisLEY32vHXILKHkxXuO3dJBnV8SwgERqmTvCbkyj5dkuHpzW9yjSIEAqMAuMixUY6hsyLJoBYWy0EQGJWjRMrHFbglbX0kgw5gKARGlmsYi/VgYG79n49kkAXFPCQCo5Rr3Q8qG3P9BsXtvpJBffbACEyGUdoP4kt9amEpL/tKBr0MNgLz4vh+Gp3B/jK/x59ezypRv1eb6z/iK4ucsg++kkGvRBuBMelC3214Fv0+ra+DyOCbma3fWGVTnstlJINeHhOB8QXKddzjT7q1RGDXG/cFPpbafWtyPENZyaCXxwVCnX1wu/q92lwHdj3q+b8qkkGvxL9/+bUOTtZzu89iiEmPuoQoKxl08LDuIj9WdAp2gACZ7tXqNmQmSH5cdeVOq0gGVwUiNur7O71wdfHf/F8jjAiSwzO47tXKvhRAou/7uaxGzTI0VVEuy1eD5E3d3/O6c7jQ7luS4RmqSoZtlOePL24ZLQ8b9SD5Nu5X5xokAawjGepUBs51MV4S2k9r7OQAdFUgBibVBajofJtmlONqis5vez8pAF2SAYQCpAZxTZ/fz+9/Vhpsl+Xj3m2D43M/AGj6l5NOHtZFHKydkmNHGatBfNM2kZAMmutcgTsnIyNsGQNbpfpuh4gvaslFjJeEZDABSEkH2jIGvkC5jisC0GX5hCSDqSFOyYTSXC7MBU7RviLNyEkybDZEMSEVzG4iZukaNuhivBQlgw7gKphNK52EFA0YX9kfPlhnmlwZA26SYQNApJPwt276Do7reEHFNNkyBhwlwwYukbgIF8pmSMVGARRmZsu6mxikq79Vh+K77kdhXzqkYtzDv6rQjIeWeS5T7NREYNhKBgNG2VtK1HOCRUDCykyTicAwlgy6jFgPK+T6YosE1hYE0AkMb8mQ95LDSKw/ms6dyPgQGJdk+MsjWiMbC5l5bmg9837Qh8Bwlwx6w/mhp/1JM+d+sIjABCEZ8iRm3f9JJsNlfKjeEosITCiSQS137sUWBcDz6kFcll0EJiTJoOFxTuKWm1MeoaYVIKPULgITkGTIyguMcqCpKxzdqI3AuPo9agOTbI3TtN3oPiWIHKMyJgJjEvVyG0vJoBCYDfYpwZNz6kPt1VZpIzASLH1eZoiFeh86y8L9qS2AyOl7MTYCowMn16kOTPJuIMg++ExcNKGNwEjA1DmnLIMRUBd50UHlElqzERgVOCzDdZrSSsaKUvobUvvV0JkOmGmdg6TwJTDEByatJYKt8ZSxPgkm9VevfQkMZ8mQeYCy1idBpMxIfQgMd8mQAljF+tYACrLhtSICw18yLPN/hbpPgmWbQ/lnpmzz0R1sLyIw7CVDnCxySVsbQEXb0+hMlMyogegiMOwlAwwiSma1rU+CS03cuwhMEJIhBVD5mJ0Eos6ckit1ERj2kgGuU/2QXR3Q1HMpudKHZ83/gRuGZGjoL1gBJnwylfcJ9VxfIJJhvrV+T7U+dZnSx2HBNPFOBCQFNZJV5Xkq/UuZCo7vMsfEb5UKbfMc44fMfQGpchwlUtNmRTdxr9bBk4CfRMlxEwXapWtuRaxLQKrM9yDmh7yXaXydgycB34NYHkQy4EkQ98TGH8RGhLoEos58D2IxiJ0RFl9gV4lgMh8PKtMnNXpslMxL/Q+ub4U3cVwasSGYwWgUIFdKbZuZhSYAM10TsdO9VlwGpnP/c2SqLMrb0hFuu2iNyzKbX0KhDJjp2eBSQZs7c2Eu99bAPnge1lZnAhHbwu8bxWQUJ2FYnQ1EbA/OrUbJrLVMgqti297HH0gxHVUds9l2ZTd5v1EkLo7j1P0wyevtiKssC3pKdjCMkSJrjcQMUZQgyUlZoHyOfxAn55Y6Uky7Y69iCtB2gpj4gFL1mJUMubKUIk0CmgJ2iH5tb2lV0fI8L/3K4rLvPMCHT5d9aEoqZiPEHXV9h22RmOGHY1fnHAAsXIsrYP8DH4EXxUVyVPQAAAAASUVORK5CYII=',
                        scaledSize: new google.maps.Size(56, 56)
                    },
                    title: 'Marker 3',
                },
                {
                    position: { lat: 40.7823477, lng: -73.9680543 },
                    icon: {
                        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAAAXNSR0IArs4c6QAACxNJREFUeAHtXb2uG0UUtrRrRJmCB0AKD7Dr9CQiHSmIoAhdoggeIC/ATWgpLqEhXS4SERK5tkNo0lwcpUmRSIYmIAXJlyIpSGGElIZm0Tf2XI+dc2b/zpld/4y0mvV6d3bmfHP+5szMdjprmIanklPDbpL0o+TKME72ht3e7UGcjgZROjFHnE4HcZqtHNP5f2Pci2fw7GGUXERZa0iG9akyADNgdXv7gzgFAKvgSP0em87QTS4P307eXR8KtbCmwzg5149715UBywMegO7fjZNzLSRR+6pkOA2gQRTqcVkeaPT/3XQCMHecSfQbcNsQOqxtoPH1GUF3Ek3Zrkv9LowQVZ1GcxMPTLn7u+lk0E0ubxdqnU7n8K3k4gCNlyJk0+VsC5BrKCpLc+RG6kgYJ4O49/XGcFwOxxsfc1PcEHDdRonLHPBOOum6i9Vt47oT4FYAHsa9/dud5NRaGTrQA1vJdSvgnYAKH3JdRGq/27syoMciyxkEHDHW9/q09b7jfOhr24Hytv9u3LveSnG6TVbmiWisKA1aB+JhlB7UbdS2Pd+PerdbwYk78KqHthoHcQdedfCsxGkMxDYaLA9OX8gef3Ite3p1L3t24xZ54L9H5z/Pjs586jU2LIFD5PAVg4rTNoD38zvvG7Ce37yT/fPrH9l/03+zKunVw6cZygDwKDMEYNQ7ghk2JpJQ0fqiKl7mGgj827WvMhC9KmB5IKPsp1e/aAZM7dCUGWFpwEl/8N4FwyVaoFGgvp68yI4PfsoenP4wJFdO1UZszNhm4BgegPvru/sUfYNeCwpkN52ojJ2GdNQhKn//8lZQkIq8DHUKoSfFjRpMfSijq+rcCwvx9fGLIvQ8uQei9e+HT4yYhf569MFnRvRB/LnH0ZlL5j/cA8MFz5QVyxCteL5OG4s8KzYTLlRkAT37z2/unICSdwLCAwSAVYQgvntQBkR1mY7z/Ob3td/rqxOiOSKidD7rWbWy0HVwBYokcI0EaBzxLJhF6gJu1DRyaovSudWpCh7EWpGeD+COepdU6+KCWtSA0gaxlijVDsoCvDwdBM7U5DgXNOocQOZ1MLQBbaGeF7g2qjRKo224FAHv2Y1vtYhSulzUxZc0QawUCNbkPvRqH+dBLCn26NLgWS5CnXzcqAZiN52U4kJN7ssTSRCZmoaBBaNqjvr7DC41nVhmmE2T+3w9GIZKCEe5Knj2OdTRByL+U2jHuBAXQt7aikrnPj8PjZZ+n3Z5rx4+YdWihp9YyCLVWiWE0QsuKfVY9Q6Rx4mPztcfZFjphH6LVMvvQ0M50ammM+LUBG6PD+5nOLQCuD6djrZJi1Lv6MwwTrCEWbzn+gamtaxNBGhXkwJHGFqhDVzCzABJmvbjZI/VhRrGC3oolzT9PARmV9OLe7+IEtMFBkBxSdSqjhiXwixCUeA+Lp4H8eISQPqcshJh5Uq/xy2PeidARTzRva/uOWnMaIhPH/eJ9kqi470+fvkGQ2gDCBHNJcn2kmJUYzcIjvukeyTVo5sAEPXgXAuEvqh6Vry27BNqWJ8+y1OyN3IEaApAWLtUwjCbpEW6ZI1qDJ1xfl8I7gOoTQGId3NciBl1XIcrfT1yNlfQCNpSViB6ZqjQUJMAcroQwJYGitDvKKMfJ4vJwNL6D6KCStqWp0ucJgFEPahoi7AYXehBt+ES55QTDUBDiU+0oWkAYbRQ6fHH18S40OhB7NQnAZpbBlf5UOKzDQByYlTSGv0RuyxqRB8o/Qfx4YKsfd40B6J9lBidSkZdYMhgz0xpYlKiQ9uJXm1DGwCkrFHJjgzsOsNugs1SxbiD84MkRUeR+rYBQE6VSPnBwK4jHf/DzGoqhZjN7ALbBgCxFpFKcoZMMupIuxBcpUMaMACyDQCqd2ZEJqQ3V+XCKiEn5bYFQKwYppJYjNAAKLzejwNQSu67YtJ33gYOVAcwTqcQoWIGDMraAbigZwAAsx2Awh3YZYgdgDWIuyUidMeBLsdIn3M+sZgRE6cGQOorJ5X1YlvciJf3Rm8YgKFHg9TdCGPECH+jgYtEhHbkqcHk0L6oemfW8AM5xR16KA3iEJOq8F4cWvNPfWKXG0oT9InH4kNpaBA1Ci8ZjfYRrU3/UVEZyHW5OiYj8cFsVI6aHyk5Ci9HgIXPplEm1ZEl9fB8MFs+nMSJDuglDUK1sUzOgAFtpOprwkn4rJtUgbYczpCRrLx9V1tzbk6sXCQizQZR8hFEqPiUCkxqosTHNolRbjWW5NxQM6Vi2MFXVeR1ARWNhgIPJUaxpAxGhHtoLLqkaMeJT0n9h/eerFKSjgmicExipVIoa7TJoTROfAr7wotphRoLWzgxClC1Flu63NAUgNyCHunFnv0oWWyarmHIgJicNRqCC5sCkOM+8TmxS1PrlfQg1xtD6MImAPS1Vzqg/UNn5SPNGnoQXMj1SDj7rsiTPofBAEvQPTRX6KL+nOUpzn1xutB/1pLRmB+KRvl6pWRYRboDlC3Ptw+ANPctLWxxADxXttJF7+emWcwMGrVN4lQ53G27f5MDlf3ezlrclnLpGWq2kbBIOfEC60y6h9r3hsghYXxtk3TcTXu4TQ6ApJYYxYup+Jz1E6EPxRuqMDix2iFQZ2rg3rZL2O8zEoUUn5YNtUZlbMMxEsKlEK6FrYdU7gNPa9TnDevTgmdz6an2LrHyeuy6cCLawcX60EH1FrIm/q225mJUzZgBmD6dgcYDxDbrRNTfx3mqOh3RhyJJyye03AirjYpWWPEKIjQxBcLWj8tRJ85gQd3RJrXO5zNeVkHVGlpzCZMHIggC38p9pslzn59nwVPtdO7Q2Spg1G8tl8IFoQiIqiKpgKWK0JBPZIYBj9kfjQLOXtNYeu2CZ8/zdCIIhIThKDXxRACJiInPUJlXyxgsqpyHupXlPguipkVqAUReFEQLJLjCfV7yHGUXAQ51CWJwldF9Fjiba+1gyBHc5yfaHm9ziFZwpQSYKAOhL59hZd9rc9Q1xOBDrt9nweJyeP4cwTWuY/TCZ+lZAro5CA+uAQiYDQ1AIAIxyXj1wH+4B/fimTKg4Z3oOKFmeC8FbTmA8q6b0Rnh6fd5wKNn531owwUw1DnqFILrDH2idFKb+yy4oUWpBRi6kYsnhgIN7wltQM0AdDazs0DUyUOLUgsicgtkWdFaB2SIVojZkJavbbN3wLoqiE2IUtsgm0N8QUci2q6RABrKxoy6YKJy1YWJhL4bSAENmTwQ3hTBglM2B4ExyxlcUhVQAIatr1AGymoMNAtilE7F9B4FIK5pbA5bFjzufjjUsBDBpZgFQB34D2A1IRq5etvrlb5SxgHlu64Z+LWN2bac3MjcB0Ld/5o0ajYN3ODgWfAPo/Rg04gZuj0izroFpEq+A7H6wqDGwbOA70AsD2JrwLMg7gyb4iCqOOoWiDr5DsR8EBszWIoCOw8Ei24eFNqwUHlflE4HZb6DW5TgGveZEZvAEQwVotsRkrq5ZGRBAzCqTIyd7nzF2RdWlr5zRBGrzdfMDLdt5MZZm+lFKG0GjKobRCrM5laLubpi0nkekmetuY4CEdc2Xzcmo0GcbgbXcSDi+saJ1SidBIsk+Agb+r/1BzIZV56zGZrYmu/DllHD2Igftfmesvp3S0RlWdCNsYNpjG20WqNkglGUjTROygJV5P77cXp25kcmY1nuyR/uWrwvGQO0rTBMioBS9Z65G3Jl5opoAmoA24de23FaVbQKPmd2WZzpzj1sfDrTocaomAww7uj4ZeYc16JkggP3zp/ZA1goa10B+x9mYCwBZwah6gAAAABJRU5ErkJggg==',
                        scaledSize: new google.maps.Size(56, 56)
                    },
                    title: 'Marker 4'
                },
                // 可以继续添加更多标记...  
            ];

            markers.forEach(function (marker) {
                var marker = new google.maps.Marker({
                    position: marker.position,
                    map: map,
                    icon: marker.icon,
                    title: marker.title
                });
                marker.addListener('click', function (event) {
                    let index = JSON.parse(JSON.stringify(this.getTitle())).slice(JSON.parse(JSON.stringify(this.getTitle())).lastIndexOf(1))
                    setMapCofig(pre => ({ ...pre, center: { ...markers[index - 1]?.position }, zoom: 20, }))
                    setIsUpdate(pre => pre += 1)
                });
            });
            google.maps.event.addListener(map, 'click', function (event) {
                if (currentMaker.current) {
                    // 移除旧标记  
                    currentMaker.current.setMap(null);
                }

                // event.latLng 包含了点击位置的经纬度  
                var lat = event.latLng.lat();
                var lng = event.latLng.lng();

                // 在这里，你可以使用lat和lng变量来进行后续操作，比如显示它们  
                console.log('Clicked coordinates: Latitude = ' + lat + ', Longitude = ' + lng);

                // 如果你想在地图上添加一个标记来显示点击位置，可以这样做：  
                var marker = new google.maps.Marker({
                    position: event.latLng,
                    map: map,
                    title: 'Clicked Location'
                });
                currentMaker.current = marker
                map.addListener("center_changed", () => {
                    // 3 seconds after the center of the map has changed, pan back to the
                    // marker.
                    map.panTo(marker.position);
                });
                map.setCenter(marker.position);
                map.setZoom(25)
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div ref={mapRef} style={{ height: mapCofig.height, width: mapCofig.width }} >
    </div>;
};

export default MapMaps;