'use strict';

/**
 * @ngdoc service
 * @name ganttChartApp.Dataservice
 * @description
 * # Dataservice
 * Service in the ganttChartApp.
 */
angular.module('ganttChartApp')
  .factory('dataService', function Dataservice() {
    var chartData = {
    "count": 381,
    "parameters": {
        "limit": 100
    },
    "data": [
        {
            "id": "red-carpet-glam-for-lips",
            "url": "/giveaway/red-carpet-glam-for-lips",
            "title": "Red Carpet Glam For Lips!",
            "short_title": "Enter to win Sephora Collection Cream Lip Stain in Always Red!",
            "description": "Nothing says red carpet glamour quite like a classic red lip! Sephora Collection's Cream Lip Stain in Always Red gives you a long-lasting rouge pout with a creamy matte finish...in just one swipe of the stain's wand! A favorite of Poshly Beauty Editor AJ Marechal, the Cream Lip Stain goes on like a gloss and dries to a lightweight stain finish that stays put through cocktail hour, awards show and fab after parties. Bring that red carpet look to all of your day-to-day events by entering to win the Always Red lip stain now!",
            "product_image": "http://98125a5ee7d1aa0f0509-f450597f3a546005d49d9c6885ab3afa.r94.cf2.rackcdn.com/products/Nair.jpg",
            "question_count": 2,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140227003408+0000",
            "end": "141029003408+0000",
            "keywords": [
                "lips",
                "lipmakeup"
            ]
        },
        {
            "id": "short-title",
            "url": "/giveaway/short-title",
            "title": "short title",
            "short_title": "full title",
            "description": "description",
            "product_image": "http://98125a5ee7d1aa0f0509-f450597f3a546005d49d9c6885ab3afa.r94.cf2.rackcdn.com/products/Nair.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140723211806+0000",
            "end": "140726211806+0000",
            "keywords": [
                "body",
                "product"
            ]
        },
        {
            "id": "dive-in-with-sally-hansen",
            "url": "/giveaway/dive-in-with-sally-hansen",
            "title": "Dive In With Sally Hansen",
            "short_title": "Enter to win Sally Hansen Triple Shine nail polish in Dive In!",
            "description": "Ready to Dive In to warmer months? We thought so! Lacquer up your nails with Sally Hansen's Triple Shine nail polish in Dive In, a glossy turquoise green! This polish is built for spring and summer, offering your manicure protection from water and wear so you can play with your nails on display. Natural crushed pearls ramp up the gloss factor in this chic lacquer, giving you enough shine to make the sun jealous. Enter to win this nail polish now!\r\n",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sally-hansen-triple-shine-dive-in.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140421042634+0000",
            "end": "140505162634+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "beach-hair-at-home",
            "url": "/giveaway/beach-hair-at-home",
            "title": "Beach Hair At Home!",
            "short_title": "Enter to win Bumble and Bumble's Surf Spray!",
            "description": "Craving ocean-styled hair but don't have time to venture to the beach? Introducing Bumble and Bumble's Surf Spray, a saltwater-based styling spray that makes wind-blown hair a total breeze! Surf Spray offers your locks volume and matte texture, while seaweed and kelp extracts enhance moisture along with that seaside feel. Perfect for sexy summer 'dos and spectacular, piecey waves, Surf Spray smells like warmer months, all bottled up! Enter to win this must-have Bumble and Bumble spray now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bumble-bumble-surf-spray.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140410110219+0000",
            "end": "140430230219+0000",
            "keywords": [
                "hair",
                "hairstylingproduct"
            ]
        },
        {
            "id": "fight-acne-and-sun-damage",
            "url": "/giveaway/fight-acne-and-sun-damage",
            "title": "Fight Acne and Sun Damage!",
            "short_title": "Enter to win Murad's Anti-Aging Moisturizer Broad Spectrum SPF 20 for Blemish-Prone Skin!",
            "description": "Let's face it: acne doesn't simply vanish like your high school years and wild college parties... in fact, it can stick around well into adulthood! But with Murad's Anti-Aging Moisturizer for blemish-prone skin, you can tackle two adult skincare concerns at once! With a high-quality SPF 20, this daytime hydrator protects your face against UVA rays that lead to visible signs of aging and damage skin's DNA. Murad's Kombucha Collagen Defense ramps up collagen production to help smooth the look of fine lines, while willow bark extract and other oil regulators help stave off the formation of zits! Give your skincare problems the one-two punch and welcome clearer, more youthful-looking skin! Enter to win this coveted moisturizer now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/murad-anti-aging-acne-prone-spf.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140404071902+0000",
            "end": "140430191902+0000",
            "keywords": [
                "face",
                "facemoisturizer"
            ]
        },
        {
            "id": "smooth-it-out-for-48-hours",
            "url": "/giveaway/smooth-it-out-for-48-hours",
            "title": "Smooth It Out For 48 Hours!",
            "short_title": "Enter to win Tresemme's Keratin Smooth Creme Serum!",
            "description": "April showers bring May flowers... Along with unruly frizz. Keep the high-voltage hair at bay this spring with Tresemme's Keratin Smooth Creme Serum, a lightweight serum that combats frizz and fly-aways! Apply to damp or dry hair after using your fave shampoo and conditioner, and comb through before styling. The Keratin Smooth Creme Serum will help lock in a sleek hairstyle for up to 48 hours! With this Tresemme serum, you'll be able to forget your spring hair concerns and take on the day... Just don't forget your umbrella!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/tresemme-keratin-smooth-creme.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140416035434+0000",
            "end": "140430035434+0000",
            "keywords": [
                "hair",
                "hairstylingserums"
            ]
        },
        {
            "id": "body-hair-barely-there",
            "url": "/giveaway/body-hair-barely-there",
            "title": "Body Hair? Barely There!",
            "short_title": "Enter to win Completely Bare Body Moisturizer & Hair Inhibitor!",
            "description": "Shower shave sessions got you bent out of shape? Cut down on your razor rendezvous with Completely Bare Body Moisturizer & Hair Inhibitor! This hydrator contains capislow, an ingredient proven to help reduce hair growth and density by as much as 50%, allowing you to feel hair-free without always turning to your shaving routine for results. Apply twice a day and watch body hair growth slow to a crawl! Perfect for summer season when miniskirts and cute shorts abound, Completely Bare Body Moisturizer & Hair Inhibitor will keep your gams -- and more! -- supple and smooth. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/completely-bare-moisturizer.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140416052534+0000",
            "end": "140426172534+0000",
            "keywords": [
                "body",
                "bodylotionmoisturizer"
            ]
        },
        {
            "id": "let-spring-lips-shine",
            "url": "/giveaway/let-spring-lips-shine",
            "title": "Let Spring Lips Shine!",
            "short_title": "Enter to win Clarins Instant Light Natural Lip Perfector in Candy Shimmer!",
            "description": "Pucker up this spring with a versatile lip gloss from Clarins! The Instant Light Natural Lip Perfector's silky gel gloss melts into lips, while its subtle, 3D micro-shimmer reflects light to offer lips a fuller appearance. Your pout is left nourished and seductive with a hint of healthy color! Poshly is giving away Clarins Instant Light Natural Lip Perfector in Candy Shimmer, a warm pink that will complement your fresh spring hues. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/clarins-natural-light-lip-perfector-candy-shimmer.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140404064915+0000",
            "end": "140425184915+0000",
            "keywords": [
                "lips",
                "lipgloss"
            ]
        },
        {
            "id": "blood-orange-lips",
            "url": "/giveaway/blood-orange-lips",
            "title": "Blood Orange Lips!",
            "short_title": "Enter to win Bite Beauty's Matte Creme Lip Crayon in Blood Orange!",
            "description": "Lip crayons are all the rage in the makeup world, and Bite Beauty's is truly top of the line! The pout-centric brand's Matte Creme Lip Crayon hydrates lips while providing them with a rich, highly-pigmented matte color that's perfect for bold spring looks. Packed with lip conditioners including orange peel wax and shea butter, Bite's Matte Creme Lip Crayon is a favorite of beauty bloggers and makeup gurus alike. Poshly is giving away this springtime staple in Blood Orange, an electric orange-red that will pop against any skin tone! Enter to win this lip crayon now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bite-lip-crayon-blood-orange.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140331035620+0000",
            "end": "140422155620+0000",
            "keywords": [
                "lips",
                "lipmakeup"
            ]
        },
        {
            "id": "your-haironly-smoother",
            "url": "/giveaway/your-haironly-smoother",
            "title": "Your Hair...Only Smoother!",
            "short_title": "Enter to win Blow Pro's You Only Smoother Advanced Smoothing Spray!",
            "description": "Are you and your blow out constantly on the outs? Seal your hard work in before you power up the hot tool with Blow Pro's You Only Smoother Advanced Smoothing Spray! This universal spray self-corrects to meet your hair texture's needs, and bonds to hair fibers to fill in gaps caused by chemical and styling damage. Pure Protein Blend nixes static electricity, while the formula as a whole offers heat protection up to 450 degrees! Apply to clean, damp hair before crafting your sizzling, ultra-smooth hairstyle and wield your hot tool with no worries Enter to win this versatile styling spray now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/blowpro-you-only-smoother.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140407035300+0000",
            "end": "140419155300+0000",
            "keywords": [
                "hair",
                "hairstylingproduct"
            ]
        },
        {
            "id": "get-your-glo-on",
            "url": "/giveaway/get-your-glo-on",
            "title": "Get Your Glo On!",
            "short_title": "Enter to win Glo Oil Free SPF 40+ Sunscreen!",
            "description": "Summer is just a few calendar weeks away... Is your skincare routine ready? Prep your face for a sunshine rendezvous with Glo Oil Free SPF 40+ Sunscreen, a fave of StyleBistro deputy editor, Cristina Velocci! Rich in hydrators and vitamins, Glo's sunscreen provides broad spectrum protection to block both UVA and UVB rays. What's more, the oil-free formula is fab for acne-prone skin that craves lightweight moisture! Apply in the AM before heading outdoors and you'll be singing, \"Here comes the sun, do-do-do-do...\" Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/glo-minerals-spf-40.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140408133052+0000",
            "end": "140418013052+0000",
            "keywords": [
                "face",
                "sun"
            ]
        },
        {
            "id": "fight-acne-the-high-tech-way",
            "url": "/giveaway/fight-acne-the-high-tech-way",
            "title": "Fight Acne The High-Tech Way!",
            "short_title": "Enter to win illuMask Anti-Acne Light Therapy Mask!",
            "description": "Ready to see the light in your battle against zits? illuMask has harnessed the power of phototherapy to bring the technology out of the dermatologist's office and into the comfort of your own home! This cutting-edge, FDA-cleared mask uses red light to reduce inflammation and heal breakouts, and blue light to kill the bacteria that causes acne. In a clinical study, over 93% of illuMask users saw overall skin improvement in as little as two weeks, and the number of pimples were greatly reduced! illuMask fits just as seamlessly to your face as is does to your skincare routine -- in fact, it's as simple as wearing a pair of glasses! 10 Poshly members will win this acne-fighting mask... Enter to snag your own now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/illumask-acne.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140401060430+0000",
            "end": "140415180430+0000",
            "keywords": [
                "face",
                "faceskincare"
            ]
        },
        {
            "id": "drybar-blowout-at-home",
            "url": "/giveaway/drybar-blowout-at-home",
            "title": "Drybar Blowout At Home!",
            "short_title": "Enter to win Drybar's Big Hair in a Cute Little Box set!",
            "description": "Big things can sometimes come in small -- and super cute! -- packages. Case in point? Drybar's Big Hair kit, a collection of the salon chain's styling products used in its signature va-va-voom blowouts! Whether you're aiming to recapture the Southern Comfort blowout or the Hot Toddy 'do from Drybar's beloved styling menu, this quartet of products will have you covered from shampoo to finish! The Big Hair kit includes Drybar's Happy Hour Blowout Shampoo and Weightless Conditioner, the Southern Belle Volumizing Mousse, and Money Maker Flexible Hold Hairspray to keep your round-brush work in place! All products are travel size, as well, making this set the perfect styling companion for your spring and summer trips. Enter to win Drybar's Big Hair kit now! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/drybar-big-hair-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140324032310+0000",
            "end": "140415152310+0000",
            "keywords": [
                "hair",
                "hairstylingproduct"
            ]
        },
        {
            "id": "bobbi-browns-beauty-bible",
            "url": "/giveaway/bobbi-browns-beauty-bible",
            "title": "Bobbi Brown's Beauty Bible",
            "short_title": "Enter to win \"Teenage Beauty\" by Bobbi Brown!",
            "description": "Teens and young women alike, meet your beauty bible: \"Teenage Beauty: Everything You Need to Look Pretty, Natural, Sexy & Awesome\" by renowned makeup artist Bobbi Brown. Packed with makeup tips and skincare secrets, \"Teenage Beauty\" helps newbies explore the beauty realm, and offers budding artists the chance to ramp up their routine with Bobbi's seasoned advice. The how-to book is filled with gorgeous photos and step-by-step look breakdowns for all women of color, as well! A favorite of Poshly beauty editor AJ Marechal, this holy grail makeup book is a must-have as prom season gets into full swing. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bobbi-brown-teen-beauty-book.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140319031047+0000",
            "end": "140411151047+0000",
            "keywords": [
                "body",
                "bagscases"
            ]
        },
        {
            "id": "high-voltage-spring-mani",
            "url": "/giveaway/high-voltage-spring-mani",
            "title": "High Voltage Spring Mani!",
            "short_title": "Enter to win Formula X For Sephora nail polish in Power Source!",
            "description": "With the sun shining longer each day, bring some brightness to your beauty routine with a bold, colorful manicure! Formula X For Sephora in Power Source amps up the voltage on your nails with a hot coral shade. Apply two coats of this highly-pigmented polish and step out in style this season...ten times over! Formula X For Sephora polish holds up through the wear and tear of springtime activities (closet cleaning and pool parties, anyone?) so you can keep your calendar booked, and your mani on point. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-nail-polish-power-source.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140318092006+0000",
            "end": "140409212006+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "arch-madness",
            "url": "/giveaway/arch-madness",
            "title": "Arch Madness!",
            "short_title": "Enter to win a bundle featuring Boots brow products!",
            "description": "With March Madness well underway, Boots is getting into the college basketball spirit with a beauty twist -- #ArchMadness! Score winning brows with this giveaway bundle featuring a selection of Boots brow products: from the brand's Botanics line, the Brow Definer defines your brows' shape, while the No7 brow pencils in an trio of shades (blonde, brown, black) offer the appearance of fuller eyebrows with a few well-placed swipes. The Boots No7 Fanomenal Lash Serum conditions lashes, and the No7 Lash & Brow Perfector tames hair with a lightweight gel, keeping your brow work in place! No matter what the outcome of your college bracket, perfectly-sculpted brows can be yours...Enter to win this Boots brow bundle now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/boot-arch-madness-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140321054631+0000",
            "end": "140407174631+0000",
            "keywords": [
                "eyebrow",
                "eyebrowcolor"
            ]
        },
        {
            "id": "extravagant-lashes",
            "url": "/giveaway/extravagant-lashes",
            "title": "Extravagant Lashes!",
            "short_title": "Enter to win Make Up For Ever's Smoky Extravagant Mascara!",
            "description": "Looking for a mascara that boosts volume, length and curl? Make Up For Ever's  Smoky Extravagant Mascara is a total triple threat! The secret element in this no-clump mascara is a microdefining wax complex -- it coats bare lashes with a highly-pigmented black for a smoked-out effect. Plus, the cone-shaped brush allows for precision application, so you can nab those tiny, inner corner lashes while sweeping out the rest for a falsie look! A favorite of Glam.com editor Valis Vicenty, this fab mascara can be yours... Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/makeup-forever-smoky-extravagant.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140329012918+0000",
            "end": "140407012918+0000",
            "keywords": [
                "eyelash",
                "mascara"
            ]
        },
        {
            "id": "travel-in-swank-style",
            "url": "/giveaway/travel-in-swank-style",
            "title": "Travel in Swank Style!",
            "short_title": "Enter to win the Contents Retro Twirl Weekender Bag from Target!",
            "description": "Leaving on a jet plane for vacation? Let your travel items lead the way as you pack your products with punchy pizzazz! The Contents Retro Twirl Weekender Bag from Target is an easy zip-and-go beauty case that fits your must-have makeup and skincare goodies. Toss in your suitcase or tote as a carry-on bag for travel that's as breezy as your destination's weather. The 'Mad Men'-esque print in bold orange and purple is an added bonus! Enter to win this functional and fashionable makeup bag now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/target-makeup-bag.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140319025618+0000",
            "end": "140403145618+0000",
            "keywords": [
                "body",
                "bagscases"
            ]
        },
        {
            "id": "teen-vogues-triple-threat-prom-bundle",
            "url": "/giveaway/teen-vogues-triple-threat-prom-bundle",
            "title": "Teen VOGUE's Triple Threat Prom Bundle!",
            "short_title": "Enter to win a beauty bundle featuring LORAC, Clarisonic and GHD!",
            "description": "Poshly and Teen VOGUE have teamed once again, this time to bring you Poshly's biggest giveaway yet! The perfect package for your perfect night, this event-themed bundle features LORAC's PRO Face Tutorial kit to help you achieve a photo-ready face, along with the coveted Clarisonic Aria (in pink!) to slough off that makeup -- and whatever else looms in pores -- each time you use the sonic cleansing system. GHD's Eclipse flat iron makes styling hair a cinch, and uses less heat than normal hot tools that can fry thirsty hair. The holy grail of beauty giveaways, this bundle will have you ready for your big night out, whether that be a date, a party or prom! Enter to win this amazing set of products now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/teen-vogue-prom-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140317150743+0000",
            "end": "140401130743+0000",
            "keywords": [
                "face",
                "skincare"
            ]
        },
        {
            "id": "teen-vogue-prom-bundle",
            "url": "/giveaway/teen-vogue-prom-bundle",
            "title": "Teen VOGUE Prom Bundle!",
            "short_title": "Enter to win a beauty bundle featuring LORAC, Clarisonic and GHD!",
            "description": "Poshly and Teen VOGUE have teamed once again, this time to bring you Poshly's biggest giveaway yet! The perfect package for your perfect night, this event-themed bundle features LORAC's PRO Face Tutorial kit to help you achieve a photo-ready face, along with the coveted Clarisonic Aria (in pink!) to slough off that makeup -- and whatever else looms in pores -- each time you use the sonic cleansing system. GHD's Eclipse flat iron makes styling hair a cinch, and uses less heat than normal hot tools that can fry thirsty hair. The holy grail of beauty giveaways, this bundle will have you ready for your big night out, whether that be a date, a party or prom! Enter to win this amazing set of products now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/teen-vogue-prom-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140317151253+0000",
            "end": "140401130053+0000",
            "keywords": [
                "face",
                "skincare"
            ]
        },
        {
            "id": "kissable-lips-to-go",
            "url": "/giveaway/kissable-lips-to-go",
            "title": "Kissable Lips To Go!",
            "short_title": "Enter to win Nivea Lip Butter Smooth Kiss!",
            "description": "\"Pout perfecting\" on your spring to-do list? Pucker up to Nivea's Lip Butter in Smooth Kiss and consider that task completed! Laced with shea butter and almond oil, Smooth Kiss melts into thirsty lips, providing them with rich hydration, while the cute tin slips effortlessly into any bag! Keep Smooth Kiss in your purse for midday moisture, or on your nightstand for supple morning lips. A favorite of Glam editor Valis Vicenty, Nivea Lip Butter will keep your kisser from getting parched as the mercury rises this season! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/nivea-lip-butter-smooth-kiss.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140321031931+0000",
            "end": "140329151931+0000",
            "keywords": [
                "lips",
                "lipskincare"
            ]
        },
        {
            "id": "nourished-nails-to-go",
            "url": "/giveaway/nourished-nails-to-go",
            "title": "Nourished Nails To Go!",
            "short_title": "Enter to win OPI's Avoplex Cuticle Oil To Go!",
            "description": "Keeping nails and cuticles healthy has never been easier thanks to OPI's purse-friendly Avoplex Cuticle Oil To Go! Loaded with vitamin E, avocado, sesame and sunflower oils, this leak-proof cuticle oil nourishes your digits, providing crucial moisture to prevent cuticles from looking ragged. Toss in your clutch, backpack or briefcase for on-the-go hydration, or keep bedside and apply before getting those beauty Zzzs. Enter to win this ultra-convenient OPI cuticle oil now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/opi-avoplex-cuticle-oil.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140306050519+0000",
            "end": "140328170519+0000",
            "keywords": [
                "fingernails",
                "cuticlecreamsoils"
            ]
        },
        {
            "id": "metropolitan-mani",
            "url": "/giveaway/metropolitan-mani",
            "title": "Metropolitan Mani",
            "short_title": "Enter to win OPI's San Francisco Nail Polish Set!",
            "description": "Give your digits a touch of city swag this spring with OPI's San Francisco nail polish set! The mini lacquers included in this chic quartet are First Date at the Golden Gate, a classic, creamy red; In The Cable Car-Pool Lane, a rich berry tone; Muir Muir On The Wall, a deep plum-burgundy with an opalescent finish; and Peace & Love & OP, a chrome shade with a purple sheen. Mix and match these polishes as you please for a modern mani, or swipe coats of a single shade across your nails for a sophisticated, metropolitan look. Enter to win this coveted OPI set now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sf-opi.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140306044222+0000",
            "end": "140326164222+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "gimme-great-brows",
            "url": "/giveaway/gimme-great-brows",
            "title": "Gimme Great Brows!",
            "short_title": "Enter to win Benefit's Gimme Brow!",
            "description": "\"Gimme brows with more oomph,\" you say? You're in luck -- Benefit's Gimme Brow is a tinted gel that brushes on thicker, more shapely brows in seconds! The water-resistant gel is packed with fibers that bind to skin and hair to build the look of natural-looking, fuller brows with just one application. This Benefit brow gel follows the trend of fiber mascaras, helping you achieve stylish, sexy brows that frame your face day or night. Try it once, and you'll feel naked without it! Enter to win Benefit's Gimme Brow now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/benefit-gimme-brow.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140310040412+0000",
            "end": "140320160412+0000",
            "keywords": [
                "eyebrow",
                "eyebrowcolor"
            ]
        },
        {
            "id": "your-hairdo-glue",
            "url": "/giveaway/your-hairdo-glue",
            "title": "Your Hairdo Glue!",
            "short_title": "Enter to win Bumble and Bumble's Spray de Mode!",
            "description": "Long day and an even longer night ahead of you? Keep your hairstyle on lock during your jam-packed schedule with Bumble and Bumble's Spray de Mode! This quick-drying hairspray works well on up 'dos or lush blowouts, maintaining the integrity of your hairstyle well after the hot tools have been unplugged. Spray de Mode never leaves hair sticky and doesn't flake onto your chic outfit, either! Enter to win this hairstyling staple now! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bumble-bumble-spray-de-mode.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140227010854+0000",
            "end": "140318010854+0000",
            "keywords": [
                "hair",
                "hairsprays"
            ]
        },
        {
            "id": "best-of-lux",
            "url": "/giveaway/best-of-lux",
            "title": "Best Of Lux!",
            "short_title": "Enter to win Essie nail polish in Lots of Lux!",
            "description": "Ready to give your hands the royal treatment? Two coats of Essie's Lots of Lux nail lacquer should do the trick! This blue polish from Essie's Encrusted line blends two chic trends in one bottle -- warm-toned glitter makes nails sparkle, while a matte polish finish keeps your mani sleek and sophisticated. A favorite of Glam.com associate beauty editor Valis Vicenty, Lots of Lux can be yours...Enter to win the polish now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/essie-lots-of-lux.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140304065443+0000",
            "end": "140314185443+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "hd-ready-with-make-up-for-ever",
            "url": "/giveaway/hd-ready-with-make-up-for-ever",
            "title": "HD-Ready With Make Up For Ever!",
            "short_title": "Enter to win Make Up For Ever's HD Microfinish Powder!",
            "description": "Ready for your close up, Gorgeous? A dusting of Make Up For Ever's HD Microfinish Powder will have you ready for any camera -- film, TV or iPhone! Made from 100% mineral silica, the HD Microfinish Powder is a favorite of pro makeup artists who use the setting powder to soften skin's imperfections and subtly mattify the face. Apply over foundation and concealer for an air-brushed finish, or wear alone over moisturizer for that imperceptible product touch. Enter to win now! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/makeup-forever-hd-powder.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140227004507+0000",
            "end": "140313004507+0000",
            "keywords": [
                "face",
                "facepowder"
            ]
        },
        {
            "id": "urban-decay-naked-lip-gloss",
            "url": "/giveaway/urban-decay-naked-lip-gloss",
            "title": "Urban Decay NAKED Lip Gloss!",
            "short_title": "Enter to win Urban Decay NAKED Ultra Nourishing Lip Gloss in Lovechild!",
            "description": "The brand that brought you the coveted NAKED eye shadow palette is expanding the NAKED collection! Urban Decay's NAKED Ultra Nourishing Lip Gloss ups the ante on a quality gloss thanks to a rich blend of flattering color, high shine and  potent moisturizers. The NAKED gloss features Hyaluronic Filling Spheres, vitamin E, shea butter and avocado oil to hydrate your pout, thereby reducing the appearance of fine lines and dryness. In this Giveaway, a winner will get her hands on the NAKED gloss in Lovechild, a medium pink that looks gorgeous layered over a complementary lipstick, or worn alone! Add to your NAKED collection and enter to win now!",
            "product_image": "http://98125a5ee7d1aa0f0509-f450597f3a546005d49d9c6885ab3afa.r94.cf2.rackcdn.com/products/Nair.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": true,
            "start": "140213105208+0000",
            "end": "140310225208+0000",
            "keywords": [
                "lips",
                "lipgloss"
            ]
        },
        {
            "id": "perfectly-pink-cheeks",
            "url": "/giveaway/perfectly-pink-cheeks",
            "title": "Perfectly Pink Cheeks!",
            "short_title": "Enter to win Bobbi Brown Blush in Pale Pink!",
            "description": "Don't let the bright hue of this blush intimidate you -- Bobbi Brown's classic blush in Pale Pink is anything but garish, giving cheeks that just-pinched look! Apply to the apples of cheeks for a healthy flush and natural, sheer wash of color. Pale Pink can be worn alone, but is also perfect for layering on top of other blushes and bronzers for an added pop of pink. A favorite of Poshly Beauty Editor AJ Marechal, Bobbi Brown Blush in Pale Pink will be a new staple in your beauty arsenal, offering you a wintertime glow -- even while in the safety of the warm indoors! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bobbi-brown-blush-pale-pink.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140211110937+0000",
            "end": "140308230937+0000",
            "keywords": [
                "face",
                "faceblush"
            ]
        },
        {
            "id": "cat-eyes-by-loreal",
            "url": "/giveaway/cat-eyes-by-loreal",
            "title": "Cat Eyes by L'Oreal!",
            "short_title": "Enter to win L'Oreal's Blackbuster eyeliner! ",
            "description": "Ready for peepers that meow and totally wow? L'Oreal's Blackbuster eyeliner from the brand's Infallible collection makes cat eye makeup a cinch! Blackbuster's marker tip allows for smooth, mistake-proof application and a precise, clean line. Draw on the rich, black ink close to the lash line for subtle eye definition, or flare out the liner at your outer corner for a '70s look! With so many design options, L'Oreal's Blackbuster is the purse-friendly liner that will get the job done. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/loreal-the-blackbuster.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140224051350+0000",
            "end": "140307171350+0000",
            "keywords": [
                "eye",
                "eyeliner"
            ]
        },
        {
            "id": "your-lips-pretty-in-pink",
            "url": "/giveaway/your-lips-pretty-in-pink",
            "title": "Your Lips: Pretty in Pink",
            "short_title": "Enter to win Sephora Collection Rouge Cream Lipstick in Love Test!",
            "description": "Pretty in pink? You bet, with Sephora Collection's punchy Rouge Cream lipstick in Love Test! This bright pink boasts blue undertones to help the shade stand out against skin, while the hydrating formula offers smooth, luxurious wear. This bold shade looks chic and feminine against heavy winter wear, and will transition well into bright spring months, as well! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-lipstick-love-test.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140213114142+0000",
            "end": "140304234142+0000",
            "keywords": [
                "lips",
                "lipstick"
            ]
        },
        {
            "id": "your-dorothy-nails-are-here",
            "url": "/giveaway/your-dorothy-nails-are-here",
            "title": "No More Kansas Manis, Toto!",
            "short_title": "Enter to win Sephora's Formula X Liquid Crystals in Spectrum!",
            "description": "No place like home when it comes to your beauty routine? Click your manicured nails together three times to be whisked away with this Giveaway! Sephora's Formula X Liquid Crystals nail polish in Spectrum is a chic, long-lasting glitter lacquer that offers an updated twist on the traditional red mani. Sheer crimson polish is laced with red and gold micro-glitter to offer dimension to each nail. Two coats will take your manicure to new heights! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-formula-x-polish-red.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140211113629+0000",
            "end": "140301233629+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "tamed-brows-that-wow",
            "url": "/giveaway/tamed-brows-that-wow",
            "title": "Tamed Brows That Wow",
            "short_title": "Enter to win NARS Brow Gel!",
            "description": "Tidy up brows before jetting out the door with NARS Brow Gel in Oural! This clear gel offers a needed finishing touch to any beauty look, whether you're rocking a bare face, red lips or smokey eyes. The brush will add to brows' definition, while increasing the look of a perfectly symmetrical face. If you haven't used brow gel before, you'll be addicted now! Enter for the chance to win NARS Brow Gel in Oural!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/nars-brow-gel.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140218045104+0000",
            "end": "140301045104+0000",
            "keywords": [
                "face",
                "mascara"
            ]
        },
        {
            "id": "nourish-dry-skin-this-winter",
            "url": "/giveaway/nourish-dry-skin-this-winter",
            "title": "Nourish Dry Skin This Winter!",
            "short_title": "Enter to win Skinfix Body Repair Balm!",
            "description": "Harsh winter weather can leave skin wind-chapped and moisture-sapped. While you bundle up with scarves and gloves, nourish your skin during these frosty months with Skinfix's Body Repair Balm, a rich, medicinal moisturizer! Formulated with colloidal oatmeal, healing botanicals and emollient protective oils, this luxurious balm is perfect for snow bunnies struggling with dry, irritated skin -- especially those with eczema and dermatitis. The Body Repair Balm is free of steroids, fragrance and parabens, making it the perfect sensitive skin solution. Slather on the balm after bathing and enjoy a hot cup of tea -- winter has never been so comfortable.",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/skinfix-balm.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140207195743+0000",
            "end": "140222195743+0000",
            "keywords": [
                "body",
                "product"
            ]
        },
        {
            "id": "eau-de-lacoste-for-men",
            "url": "/giveaway/eau-de-lacoste-for-men",
            "title": "Eau De Lacoste For Men",
            "short_title": "Enter to win Eau de Lacoste L.12.12 Noir!",
            "description": "With L.12.12 Noir, Lacoste offers a modern take on seductive, aromatic colognes. Top notes include Watermelon, Egyptian Basil, Lavender and Verbena, while the scent wears deeply into full-bodied Cashmeran, Coumarin and Patchouli. A great gift for a guy in your life or yourself, L.12.12 Noir is the perfect scent no matter the season. Two spritzes of this enticing fragrance and you're ready to go!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/lacoste-noir-cologne.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140123005652+0000",
            "end": "140216005652+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "lacoste-perfume-for-women",
            "url": "/giveaway/lacoste-perfume-for-women",
            "title": "Lacoste Perfume for Women",
            "short_title": "Enter to win Eau de Lacoste perfume!",
            "description": "Eau de Lacoste brings you a chic take on the feminine scent of a clean cotton shirt. Top notes include white pineapple, mandarin and bergamot, while sambac jasmine and orange blossom fill out the middle of this refreshing scent. Base notes are rich sandalwood, peru balsam, vetiver and vanilla for a delicious final touch. Enter to win Eau de Lacoste now!\r\n",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/lacoste-perfume-women.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140122083307+0000",
            "end": "140215203307+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "cleanwherever-you-go",
            "url": "/giveaway/cleanwherever-you-go",
            "title": "Clean...Wherever You Go!",
            "short_title": "Enter to win the Clean Rollerball Perfume Collection!",
            "description": "Want to smell Clean on the go? Feast your senses on the perfume brand's sampler platter: a set of rollerball fragrances featuring Clean's best-selling scents! With irreverent names and enticing notes, Clean perfumes included in this rollerball collection include Warm Cotton, Skin, Shower Fresh, Clean Laundry and Rain. Toss your fave in a purse or backpack for a fragrance touch-up while in between meetings, class or gym excursions. The uplifting scents transition beautifully from brisk winter months into dewy spring, so this rollerball collection is the perfect addition to your perfume shelf! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/clean-rollerball-perfume.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140118062138+0000",
            "end": "140214062138+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "glinda-the-good-polish",
            "url": "/giveaway/glinda-the-good-polish",
            "title": "Glinda the Good Polish!",
            "short_title": "Enter to win Marc Jacobs Beauty Nail Lacquer in Glinda!",
            "description": "All that glitters is not gold...in fact, it's silver! From Marc Jacobs' chic beauty line, the Enamored Hi-Shine Nail Lacquer in Glinda offers nails a serious punch of silver sparkle to catch the light in any room. The dense formula needn't require layer after layer of polish the way other glitter lacquers do; instead, two coats of Glinda will turn your nails into mini disco balls and add a playful touch to any get-up! Glitter polish is by its nature long-lasting, so this mani will stand the test of time -- even with its futuristic vibe. ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/marc-jacobs-polish-glinda.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140118061102+0000",
            "end": "140210061102+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "time-for-a-new-accessory",
            "url": "/giveaway/time-for-a-new-accessory",
            "title": "Time For A New Accessory!",
            "short_title": "Enter to win an ESQ Movado watch!",
            "description": "Ready to meet the One? Feast your eyes – and wrist – on one of the newest additions to the ESQ Movado family. The ESQ One watch in a chic gray shade is the perfect stylish and functional accessory to complement any fashionable ensemble. Water resistant to 100 meters with its silicone-wrapped case steel case and screw-down crown, the ESQ One lets you play without worry. This cool watch from one of the most iconic names in timepiece design is a must-have addition to your accessory arsenal. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/movado-watch.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140122073514+0000",
            "end": "140209233514+0000",
            "keywords": [
                "body",
                "bathbody"
            ]
        },
        {
            "id": "cold-weather-soft-hands",
            "url": "/giveaway/cold-weather-soft-hands",
            "title": "Cold Weather, Soft Hands",
            "short_title": "Enter to win L'Occitane Shea Butter Hand Cream!",
            "description": "Harsh winter weather can leaves hands cracked and dry. Nourish your palms, cuticles and other parched parts with L'Occitane's classic shea butter hand cream! Formulated with 20% good-for-skin shea butter, this rich hand cream penetrates quickly, leaving your hands supple instead of greasy. Honey, almond, grape seed and coconut oil ramp up the hydrating properties of this purse-friendly moisturizer, as well. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/loccitane-hand-cream.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140113092058+0000",
            "end": "140131212058+0000",
            "keywords": [
                "hand",
                "handcreamslotions"
            ]
        },
        {
            "id": "stay-warm-with-this-nyx-bundle",
            "url": "/giveaway/stay-warm-with-this-nyx-bundle",
            "title": "Stay Warm With NYX!",
            "short_title": "Enter to win a bundle of NYX makeup products!",
            "description": "Cold weather givin' you the winter blues? Stock up on spring staples with this hot NYX makeup bundle! The brand's eyeshadow palette in Eat, Love, Be Fab boasts shimmering and matte earthy tones to warm up your complexion, while the Born to Glow Liquid Illuminator in Sunbeam helps sculpt the face and highlight cheeks and brow bones. Slick on a coat of Butter Gloss in peach-toned shade Apple Strudel to complete your look! The gleaming products featured in this NYX bundle will keep you warm well into the springtime months...enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/nyx-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140108021740+0000",
            "end": "140126021740+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "let-skin-bloom-with-wild-rose",
            "url": "/giveaway/let-skin-bloom-with-wild-rose",
            "title": "Let Skin Bloom With Wild Rose",
            "short_title": "Enter to win Weleda's Wild Rose Pampering Body Lotion!",
            "description": "Indulge your skin this winter with rich moisture and a touch of sophisticated rose! Weleda's Wild Rose Pampering Body Lotion stimulates skin's regenerative processes, leaving your gams, arms and more soft and supple. Kernel extract from wild crafted Rosa Mosqueta boasts fatty acids, jojoba oil and witch hazel water, all of which nourish skin and help maintain its natural elasticity. Smooth on this delicately-scented lotion after showering and let skin bloom with health before spring even arrives. 50 Poshly members will nab a bottle of this Weleda lotion! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/weleda-wild-rose-lotion.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "140106043834+0000",
            "end": "140116213834+0000",
            "keywords": [
                "body",
                "lotions"
            ]
        },
        {
            "id": "taylor-swifts-signature-scent",
            "url": "/giveaway/taylor-swifts-signature-scent",
            "title": "Taylor Swift's Signature Scent!",
            "short_title": "Enter to win Taylor by Taylor Swift fragrance!",
            "description": "Feeling 22? A quick spritz of Taylor Swift's award-winning perfume -- called simply \"Taylor\" -- will having you smelling like the global singing superstar. A blend of luscious fruits, blushing florals and soft woods, Taylor is perfect for the girl's girl, and makes for a fab gift for your BFF this holiday season! This feminine fragrance is available at Macy's, but you can snag a bottle of your own for free on Poshly...enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/taylor-swift-perfume.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131206083232+0000",
            "end": "140111203232+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "petite-cherie-pour-vous",
            "url": "/giveaway/petite-cherie-pour-vous",
            "title": "Petite Cherie Pour Vous!",
            "short_title": "Enter to win Annick Goutal Petite Cherie Eau de Toilette Spray!",
            "description": "Keep skin smelling fresh this winter with the feminine scent of Annick Goutal's Petite Cherie! This eau de toilette spray's notes include peach, rose, pear, vanilla and fresh-cut grass for a finish lighter than a morning layer of snowfall. French fragrance designer Annick Goutal crafted this popular scent for her daughter Camille, and the youthful perfume has become a favorite of many bold beauty gurus -- including People StyleWatch's Holly Carter! Enter to win this fragrance now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/annick-goutal-petite-cherie.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131122020345+0000",
            "end": "140110235945+0000",
            "keywords": [
                "body",
                "eaudetoilette"
            ]
        },
        {
            "id": "holy-grail-face-mask",
            "url": "/giveaway/holy-grail-face-mask",
            "title": "Holy Grail Face Mask ",
            "short_title": "Enter to win a pack of SK-II Facial Treatment Masks!",
            "description": "There will be no need to hide tired skin anymore thanks to SK-II's Facial Treatment Mask! A must-have treatment for busy working women on the go, SK-II's 100% cotton mask is drenched in vitamins, minerals, amino acids and organic acids to revitalize and hydrate exhausted skin. Apply the cotton mask for five to ten minutes, or longer for more intense absorption. Remove to reveal a perkier complexion that doesn't offer any hint of jet lag or stressful deadlines. Enter to win a pack of six SK-II Facial Treatment Masks now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sk2-mask.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131122020008+0000",
            "end": "140110235908+0000",
            "keywords": [
                "face",
                "faceskincare"
            ]
        },
        {
            "id": "va-va-voom-volume",
            "url": "/giveaway/va-va-voom-volume",
            "title": "Va-Va-Voom Volume",
            "short_title": "Enter to win Oribe's Dry Texturizing Spray!",
            "description": "When it comes to hair, pumped up volume doesn't have to translate to a 'do that resembles a 1980s flashback. Oribe's Dry Texturizing Spray offers a modern touch to glamorous locks with a sexy, voluminous finish. This texturizing spray gives hair a chic matte finish and doubles as a dry shampoo, absorbing oil at the roots before it deflates your stylish look. An added plus? With a dose of UV protection, Oribe's Dry Texturizing Spray is perfect for color-treated tresses! Check out Oribe's website for helpful how-to vids that allow you to harness the power of this versatile spray. Then, enter to win!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/oribe-dry-texturizing-spray.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131122020126+0000",
            "end": "140110225926+0000",
            "keywords": [
                "hair",
                "hairsprays"
            ]
        },
        {
            "id": "cliniquefor-men",
            "url": "/giveaway/cliniquefor-men",
            "title": "Clinique...For Men!",
            "short_title": "Enter to win Clinique's M Protect Broad Spectrum SPF 21 Daily Hydration + Protection!",
            "description": "Got a guy who's a fan of tools? Here's a multi-purpose one for his bathroom counter! From Clinique's skincare line for men, the M Protect Daily Hydration + Protection moisturizer not only steers away sun damage with broad spectrum SPF 21, but also soothes skin after shaving in the AM. Apply the dual-purpose moisturizer morning and night to improve skin's overall condition. Enter to win Clinique's M Protect moisturizer now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/clinique-men-spf-moisturizer.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131205082832+0000",
            "end": "140110082832+0000",
            "keywords": [
                "face",
                "facemoisturizer"
            ]
        },
        {
            "id": "omg-lashes",
            "url": "/giveaway/omg-lashes",
            "title": "OMG! Lashes",
            "short_title": "Enter to win YSL's Mascara Volume Effet Faux Cils Shocking in Deep Black!",
            "description": "Ready for lashes that will make them say 'OMG!'? YSL's Shocking Mascara exaggerates eyelashes for a look that will leave others wide-eyed at your peepers. The slim helix brush allows you to coat those tough-to-reach lashes in the corners of the eyes, blending both precision with ramped up, creamy volume. A favorite of People StyleWatch's Holly Carter, YSL's Shocking Mascara will be a staple in your beauty routine. Enter to win the mascara in Deep Black today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/ysl-mascara-volume-effet-faux-cils-shocking.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131122020105+0000",
            "end": "140109235905+0000",
            "keywords": [
                "eyelash",
                "mascara"
            ]
        },
        {
            "id": "scrunch-and-go-waves",
            "url": "/giveaway/scrunch-and-go-waves",
            "title": "Scrunch-And-Go Waves!",
            "short_title": "Enter to win DevaCurl Frizz-Free Volumizing Foam!",
            "description": "Uneven waves got you bent out of shape? Never fear, DevaCurl's scrunching mousse will get your curls in line in no time! The brand's Frizz-Free Volumizing Foam nixes frizz and transforms your wild mane into beautiful, glossy waves and curls. Simply apply when hair is still wet after showering, and scrunch your tresses by hand. Allow your locks to air dry and enjoy your newly defined waves and sexy volume! A favorite of Poshly's Editorial Director AJ Marechal, DevaCurl's Volumizing Foam helps hold even the thickest waves in place all day long. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/devacurl-mousse.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131222013131+0000",
            "end": "140106013131+0000",
            "keywords": [
                "hair",
                "hairmoussesfoams"
            ]
        },
        {
            "id": "the-classic-red-lip",
            "url": "/giveaway/the-classic-red-lip",
            "title": "The Classic Red Lip",
            "short_title": "Enter to win MAC Lipstick in Russian Red!",
            "description": "Feast your pout on the ultimate in classic red lipsticks...MAC's Russian Red! A favorite of celebs including Christina Aguilera and Gwen Stefani, Russian Red is a neutral, vibrant red with just enough hint of blue to allow the shade to pop against your skin. Its creamy matte finish makes for a long-lasting wear, and is the perfect accessory for any outfit! MAC's iconic lipstick will become a staple in your beauty drawer and never go out of style. Enter to win Russian Red now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/mac-russian-red.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131222011026+0000",
            "end": "140103011026+0000",
            "keywords": [
                "lips",
                "lipstick"
            ]
        },
        {
            "id": "a-spritz-of-chanel",
            "url": "/giveaway/a-spritz-of-chanel",
            "title": "A Spritz of Chanel",
            "short_title": "Enter to win Chanel Chance Eau de Parfum!",
            "description": "Up your sophistication factor with a few spritzes of Chanel's iconic Chance fragrance before heading out the door. This youthful perfume blends refreshing florals with a hint of spice, carrying you in style from day into dazzling night. In French, \"chance\" means \"luck,\" so try yours by entering to win this scent from famed Parisian fashion brand Chanel today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/chanel-chance-perfume.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131205092912+0000",
            "end": "131231235412+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "breezy-bodacious-waves",
            "url": "/giveaway/breezy-bodacious-waves",
            "title": "Breezy Bodacious Waves ",
            "short_title": "Enter to win the T3 BodyWaver 1.75\" Professional Curling Iron!",
            "description": "Don't let the tool name fool you -- this wide-barreled iron gives hair glam waves...not tight curls! The T3 BodyWaver's hollow 1.75\" barrel distributes heat evenly across the iron, so hair sets perfectly into big, polished waves. And, ionic elements help keep your tresses looking healthy and shiny, not fried from too many styling stints! The BodyWaver heats up to 410 degrees Fahrenheit, making it the perfect hot tool for any texture of hair. Plus, a one-hour automatic shut-off means you won't be driving to work or school shrieking, \"Oh no, I left my curling iron plugged in at home!\" Enter to win this professional quality T3 iron now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/t3-bodywaver.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131205093022+0000",
            "end": "131231235322+0000",
            "keywords": [
                "hair",
                "curlingirons"
            ]
        },
        {
            "id": "the-deepest-clean-from-clarisonic",
            "url": "/giveaway/the-deepest-clean-from-clarisonic",
            "title": "The Deepest Clean From Clarisonic!",
            "short_title": "Enter to win the Clarisonic Aria in Pink!",
            "description": "Find out what all the buzz is about when it comes to sonic cleansing brushes by entering to win the coveted Clarisonic Aria! In just 60 seconds, the Clarisonic Aria's pulsing cleansing brush sloughs away impurities, residual makeup and grime from pores, leaving your skin cleaner than when washed with just your hands. Easy to use and easy to charge, this gentle sonic cleanser gives skin a deep cleanse and looks adorable on your bathroom counter! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/clarisonic-aria-pink.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131205094214+0000",
            "end": "131231234214+0000",
            "keywords": [
                "face",
                "facecleansingbrushes"
            ]
        },
        {
            "id": "24-nail-polishes-all-for-you",
            "url": "/giveaway/24-nail-polishes-all-for-you",
            "title": "24 Nail Polishes, All For You!",
            "short_title": "Enter to win Ciate's Mini Mani Month Kit!",
            "description": "Love those holiday advent calendars that have a piece of chocolate behind each tiny window? Ciate did one better for you with the Mini Mani Month nail polish kit! This beauty calendar countdown boasts 24 shades of miniature nail polishes, from classic neutrals, to modern grays, glitters and punchy brights! Enjoy one new polish in the kit each day in the weeks leading up to Christmas, mixing and matching them to your stylish heart's desire. The best part about this advent calendar? Unlike the chocolates from the calendars of your childhood, these goodies will be sticking around well into the new year! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/ciate-mani-month.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131205093017+0000",
            "end": "131231231117+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "gilded-glamour",
            "url": "/giveaway/gilded-glamour",
            "title": "Gilded Glamour ",
            "short_title": "Enter to win Sephora Collection's Glittering Eye Duo in Gold!",
            "description": "Sporting \"silver and gold\" this holiday season? Let Poshly help you out with the latter! Sephora's Glittering Eye Duo in Gold brings you a modern take on glam disco eyes. Apply the primer with your finger or a brush, and then pat on the gold glitter for a long-lasting, gleaming look. A built-in mirror means this sparkling beauty kit is friendly for the on-the-go gal! Swipe on a coat of mascara and you'll be catching light -- and intrigued glances -- all night long.",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-gold-glitter.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131222012152+0000",
            "end": "131231012152+0000",
            "keywords": [
                "eye",
                "eyeshadow"
            ]
        },
        {
            "id": "viva-la-noir",
            "url": "/giveaway/viva-la-noir",
            "title": "Viva La Noir!",
            "short_title": "Enter to win Juicy Couture's Viva la Juicy Noir fragrance! ",
            "description": "Noir is making a big comeback, from Ryan Gosling-starrer \"Gangster Squad\" to TNT's \"Mob City.\" Now, the beauty world is getting in on the dangerously seductive action with one of Juicy Couture's latest scents, Viva la Juicy Noir. Billed as an enticing rendition on the original bestselling fragrance, Viva la Juicy Noir blends berry notes and gourmand accents with a touch of honeysuckle and sandalwood. Available at Macy's, this sultry scent is the perfect accessory for a night on the town! Enter to win Viva la Juicy Noir now!\r\n",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/juicy-couture-viva-la-juicy-noir.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131206082347+0000",
            "end": "131226082347+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "make-this-holiday-a-chic-one",
            "url": "/giveaway/make-this-holiday-a-chic-one",
            "title": "Make This Holiday A Chic One!",
            "short_title": "Enter to win MAC Lipstick in All Fired Up and JINsoon Nail Polish in Epidote!",
            "description": "Take your holiday jewel tones up a notch with this bundle curated by Beauty High's Rachel Adler! MAC Lipstick in All Fired Up hails from the brand's Retro Matte collection and punches up your pout with a bright fuchsia. The matte finish means ultra-long wear, even throughout multiple stints under the mistletoe! Paint on two coats of JINsoon's Nail Polish in Epidote for metallic green nails that will make your Christmas tree jealous. Enter to win this holiday bundle now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/rachel-adler-first-giveaway.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131211055136+0000",
            "end": "131222175136+0000",
            "keywords": [
                "lips",
                "makeup"
            ]
        },
        {
            "id": "britney-spears-work",
            "url": "/giveaway/britney-spears-work",
            "title": "Britney Spears? Work!",
            "short_title": "Enter to win Fantasy by Britney Spears, the Anniversary Edition!",
            "description": "You've downloaded her new album...now, you can spritz her new fragrance! Britney Spears has released an anniversary edition of her bestselling Fantasy perfume to celebrate the tenth birthday of her fragrance line. Top notes include lychee, kiwi and quince, while jasmine, white chocolate, musk and woodsy notes help fill out the rest of the sweet scent. Fantasy's Anniversary Edition, available at Kohl's, is a great addition to any perfume shelf and is ideal for everyday wear! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/britney-spears-fantasy-anniversary-perfume.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131206084706+0000",
            "end": "131217204706+0000",
            "keywords": [
                "body",
                "fragrance"
            ]
        },
        {
            "id": "luxurious-marc-jacobs-lotion",
            "url": "/giveaway/luxurious-marc-jacobs-lotion",
            "title": "Luxurious Marc Jacobs Lotion!",
            "short_title": "Enter to win Marc Jacobs' Dot Body Lotion!",
            "description": "Love Marc Jacobs' Dot perfume? Meet it's skincare companion! The Dot Body Lotion has whispers of the Dot fragrance, featuring top notes of red berries, mid notes of jasmine, and base notes of driftwood. The punch of dewy moisture leaves your gams, arms and rest of your body touchably soft, the perfect complement to the sensuous, feminine scent. Layer on top of the Dot perfume, or wear the lotion alone for a more downplayed fragrance experience. Enter to win Marc Jacobs' Dot Body Lotion today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/marc-jacobs-dot-body-lotion.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131124024837+0000",
            "end": "131206100337+0000",
            "keywords": [
                "body",
                "lotions"
            ]
        },
        {
            "id": "rapunzel-rapunzel",
            "url": "/giveaway/rapunzel-rapunzel",
            "title": "Rapunzel, Rapunzel...",
            "short_title": "Enter to win Kerastase's Masque Cristal!",
            "description": "New from Kerastase's line of luxury hair products, the Masque Cristal is a must-have deep conditioner, especially for gals with long hair. This lightweight masque smooths hair's ends while leaving the roots clean and refreshed. The Aloe Vera Illuminator in the masque's Liquid Light Complex offers tresses a boost of shine and glow, leading suits to shout from across the street \"Rapunzel!\" as you run your hands through your nourished hair.",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/kerastase-masque-cristaliste.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131124020220+0000",
            "end": "131206100220+0000",
            "keywords": [
                "hair",
                "conditioners"
            ]
        },
        {
            "id": "no-zzzs-no-problem",
            "url": "/giveaway/no-zzzs-no-problem",
            "title": "No Zzzs? No Problem!",
            "short_title": "Enter to win SK-II's Signs Eye Mask!",
            "description": "Snooze schedule leaving you with more yawns than energy? Get the look of eight hours of restful sleep in just 10 minutes with SK-II's Signs Eye Mask! This anti-aging eye mask infuses the delicate tissue around your peepers with B vitamins along with soothing vitamin E to help reduce the look of fine lines and depuff after nights when you've been less than diligent about getting those Zzzs. Each of the 14 deeply hydrating masks comes in a convenient small pouch, making it perfect for tossing in your carry-on bag for those red eyes out of town...or those all-nighters at the library! Enter to win the SK-II Signs Eye Mask now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sk-ii-signs-eye-mask.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131124023510+0000",
            "end": "131206100010+0000",
            "keywords": [
                "eye",
                "eyemasks"
            ]
        },
        {
            "id": "urban-decays-naked3-is-here",
            "url": "/giveaway/urban-decays-naked3-is-here",
            "title": "Urban Decay's Naked3 is Here!",
            "short_title": "Enter to win Urban Decay's Naked3 Palette!",
            "description": "Juliet from Shakespeare's \"Romeo and Juliet\" famously states, \"A rose by any other name would smell as sweet.\" Well, this rose's name is Naked3 from Urban Decay, and given the buzz over it, this Poshly Giveaway is sweet as can be! Already sold out online, Naked3 is the third iteration of Urban Decay's now iconic Naked collection that includes eyeshadow palettes, foundations, nail polishes and blush sets. The palette is focused primarily on never-before-seen rose eyeshadow shades from the brand, from shimmering champagne to deep brown-blacks tinged with rose micro-glitter. This eyeshadow palette has the beauty blogosphere in a tizzy, and can be yours for free on Poshly! Enter to win the coveted Naked3 eyeshadow palette today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/urban-decay-naked3.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131124022000+0000",
            "end": "131206100000+0000",
            "keywords": [
                "eye",
                "eyeshadow"
            ]
        },
        {
            "id": "makeup-bags-exclusive-to-poshly",
            "url": "/giveaway/makeup-bags-exclusive-to-poshly",
            "title": "Makeup Bags Exclusive to Poshly!",
            "short_title": "Enter to win two custom cosmetic bags from Sheldon Shirley that are exclusive to Poshly!",
            "description": "Luxury ready-to-wear designer Sheldon Shirley has brought a pair of chic cosmetic bags exclusively to Poshly in this fab giveaway! One of the custom leather bags fits your makeup goodies, while the other holds essential tools and brushes. Valued at $300, both are crafted with a rich red tone that complements the holiday season! Whether you're looking for a great addition to your travel goods or the perfect gift for Christmas, these exclusive cases are a fantastic find for any beauty-savvy gal! Enter to win now, and learn more about designer Sheldon Shirley at SheldonShirley.com.",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sheldon-shirley-cosmeticcases.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131121024336+0000",
            "end": "131203024336+0000",
            "keywords": [
                "body",
                "bagscases"
            ]
        },
        {
            "id": "finish-movember-with-the-perfect-shave",
            "url": "/giveaway/finish-movember-with-the-perfect-shave",
            "title": "Finish Movember With The Perfect Shave",
            "short_title": "Enter to win The Art of Shaving's 4 Elements of the Perfect Shave Starter Kit!",
            "description": "As No-Shave November wraps up one of its most successful iterations yet, beards, goatees and 'staches can be found on tens of thousands of men across the nation who have been growing out their facial hair in order to raise cancer awareness. Now, you can help these dudes welcome December 1st -- and a clean face -- in style with The Art of Shaving's 4 Elements of the Perfect Shave Starter Kit! The four-piece set boasts essential shaving products for a close and comfortable shave, including a pre-shave oil, shaving cream, after-shave balm and badger shaving brush. Sandalwood Essential Oil will keep skin smelling as good as it feels! Celebrate the end of No-Shave November by entering to win this kit from The Art of Shaving today.",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/art-of-shaving-perfect-shave-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131126074601+0000",
            "end": "131202194601+0000",
            "keywords": [
                "face",
                "faceskincare"
            ]
        },
        {
            "id": "zero-the-liner-hero",
            "url": "/giveaway/zero-the-liner-hero",
            "title": "Zero, The Liner Hero!",
            "short_title": "Enter to win Urban Decay's 24/7 Glide-On Eye Pencil in Zero!",
            "description": "It's time to draw the liner on subpar eye makeup. Urban Decay's cult fave 24/7 Glide-On Eye Pencil is the staple of many beauty gurus and newbies alike! This creamy, rich eyeliner goes on smooth and boasts a dense, vibrant shade that stays put throughout the day and into the night. Want a smoked out look? Blend the liner within 30 seconds after applying for a soft, sexy effect. Or, leave the liner be for a dramatic cat-eye look! Poshly is giving away Urban Decay's 24/7 eyeliner in Zero, the versatile, must-have black! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/urban-decay-liner-zero.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131117023426+0000",
            "end": "131130023426+0000",
            "keywords": [
                "eye",
                "eyeliner"
            ]
        },
        {
            "id": "chic-gray-nails",
            "url": "/giveaway/chic-gray-nails",
            "title": "Chic Gray Nails!",
            "short_title": "Enter to win Formula X For Sephora nail polish in Extraordinary!",
            "description": "Get your hands -- and nails! -- on a chic twist to the typical neutral polish. Formula X For Sephora in Extraordinary is billed as an iceberg gray that's both minimalist and incredibly modern. Apply two coats of this unique, highly saturated shade and say 'bye-bye' to boring pinks and beiges! Enter to win this fashionable, unexpected nail polish today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-formula-x-gray.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131117022418+0000",
            "end": "131128022418+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "yumis-fave-beauty-products",
            "url": "/giveaway/yumis-fave-beauty-products",
            "title": "Yumi's Fave Beauty Products!",
            "short_title": "Enter to win Blinc Mascara and L'Occitane's Shea Butter Lip Balm curated by Yumi Matsuo!",
            "description": "Flirtatious eyes and kissable lips? Both can be yours thanks to this bundle curated by Guest of a Guest's Managing Director, Yumi Matsuo! Blinc's revolutionary mascara coats each lash in a tiny, water-resistant \"tube\" that stays put through long work days, and sappy flicks! When you're ready to wash your makeup away at the end of the night, the itty mascara tubes will slide right off, saving you from the typical smearing and snagging of waterproof mascara removal. Swipe on L'Occitane's rich Shea Butter Lip Balm day and night to keep your pout soft throughout winter's chilly, dry months. Shea butter boasts deep moisturizing properties, so this multi-purpose balm can be smoothed over any bits of skin in need of moisture. Enter to win this bundle now! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/yumi-bundle-blinc-loccitane.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131114032140+0000",
            "end": "131122032140+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "iconic-red-lips-for-you",
            "url": "/giveaway/iconic-red-lips-for-you",
            "title": "Iconic Red Lips For You ",
            "short_title": "Enter to win Hourglass Panoramic Long Wear Lip Liner in Iconic!",
            "description": "Like a little black dress, red lips never go out of style. And with the holiday party march on the horizon, this bold, classic look will be on display at each office fete, family gathering, and New Year's Eve bash! With Hourglass Panoramic Long Wear Lip Liner in Iconic, you can create the perfect red pout that will last through each sip of bubbly and bite of gingersnaps. Complementing Hourglass's Iconic lipstick and matte lip stain, the liner pumps up the beauty drama with a universally-flattering red shade that stays put without drying your pout. A staple for any beauty lover, this liner can be worn with your favorite red lipstick, or alone for a punchy, bold mouth! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/hourglass-lip-liner-icon.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131105110212+0000",
            "end": "131116230212+0000",
            "keywords": [
                "lips",
                "lipliner"
            ]
        },
        {
            "id": "chanel-powder-versatile-power",
            "url": "/giveaway/chanel-powder-versatile-power",
            "title": "Chanel Powder, Versatile Power",
            "short_title": "Enter to win Chanel Les Beiges Healthy Glow Sheer Colour!",
            "description": "The brand that has brought the world iconic black dresses, pantsuits and quilted bags now brings to beauty lovers one of the most versatile face powders yet. Chanel's Les Beiges Healthy Glow Sheer Colour is a luxurious utility player for your vanity, working as a bronzer and contouring powder to emphasize bone structure and warm up tired skin. The buildable shades offer a light touch of color to complexions without appearing muddy or caked on, and feature a high quality brush that you won't be tossing out before first use! Plus, with a splash of SPF 15, Healthy Glow Sheer Colour goes beyond surface appeal by protecting skin from the sun's rays and complementing your established skincare routine. One Poshly member will win a Chanel Les Beiges Healthy Glow Sheer Colour compact in the shade most flattering to their skin tone! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/chanel-les-beiges-compact.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131107100317+0000",
            "end": "131115220317+0000",
            "keywords": [
                "cheek",
                "facepowder"
            ]
        },
        {
            "id": "soft-lips-all-winter",
            "url": "/giveaway/soft-lips-all-winter",
            "title": "Soft Lips All Winter!",
            "short_title": "Enter to win Jack Black Intense Therapy Lip Balm!",
            "description": "Meet your new best friend: Jack Black Intense Therapy Lip Balm is a top-of-the-line lip moisturizer that will always be in your backpack, purse or pocket! The Intense Therapy Lip Balm soothes dry, chapped lips, offering them moisture via rich ingredients including shea butter, avocado oil and green tea leaf extract. SPF 25 keeps your pout protected from the sun's harsh rays, be it during summertime beach trips, or winter ski excursions.  Apply before bed for ultra-soft lips in the AM, or gently blot on before your fave lipstick to boost your makeup routine's health factor. With frosty winter months approaching, this Jack Black balm will be a must-have when keeping your pout kissable as the mercury drops. Enter to win Jack Black Intense Therapy Lip Balm now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/jack-black-lip-balm-shea.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131104051234+0000",
            "end": "131115171234+0000",
            "keywords": [
                "lips",
                "lipbalm"
            ]
        },
        {
            "id": "pucker-up-your-autumn-pout",
            "url": "/giveaway/pucker-up-your-autumn-pout",
            "title": "Pucker Up Your Autumn Pout!",
            "short_title": "Enter to win a fall lip bundle curated by Alexis of The Beauty Bean!",
            "description": "With autumn in full swing, it's time to swap out tank tops for sweaters, sandals for boots, and summertime makeup for vampier, bolder looks! Alexis Wolfer, founder and editor-in-chief of TheBeautyBean.com, has brought to Poshly her favorite fall lip finds in one fabulous bundle. Burt's Bees Tinted Lip Balm in Sweet Violet offers a sheer pop of color for your everyday autumn makeup. NARS Velvet Matte Lip Pencil in Damned will be your nighttime staple, a burgundy-magenta lip color that is both dramatic and classic, a great addition to any fall wardrobe. Finally, By Terry's Baume De Rose is a multi-purpose moisturizer with cult love that will keep your pout nourished well into winter. Enter to win this must-have lip product bundle today!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/alexis-beauty-bean-lip-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131104092217+0000",
            "end": "131112212217+0000",
            "keywords": [
                "lips",
                "lipmakeup"
            ]
        },
        {
            "id": "three-steps-to-renewed-skin",
            "url": "/giveaway/three-steps-to-renewed-skin",
            "title": "Three Steps To Renewed Skin",
            "short_title": "Enter to win The Aloe Source's Anti-Aging Kit!",
            "description": "Fine lines got you in a funk? The Aloe Source's Anti-Aging Kit features a three-step system to get you glowing again! Formulated with a potent blend of red rice stem cells, peptides, sea kelp and aloe vera, The Aloe Source's Anti-Aging system firms and moisturizes skin to reduce the visible signs of aging. Apply the included Youth Renew Serum after cleansing skin, and follow up with the complementary Youth Renew Moisturizer. Then, stave off crow's feet with the Eye Firming Complex. This kit's peptide complex helps stimulate the production of collagen, keeping you looking \"so last year\" well into 2014 -- in the best of ways!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/aloe-source-youth-renew-anti-aging-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131103231319+0000",
            "end": "131111231319+0000",
            "keywords": [
                "face",
                "faceskincare"
            ]
        },
        {
            "id": "just-pinched-cheeks",
            "url": "/giveaway/just-pinched-cheeks",
            "title": "Just-Pinched Cheeks",
            "short_title": "Enter to win Bobbi Brown blush in Pale Pink!",
            "description": "Don't let the bright hue of this blush intimidate you -- Bobbi Brown's classic blush in Pale Pink is anything but garish, giving cheeks that just-pinched look! Apply to the apples of cheeks for a healthy flush and natural, sheer wash of color. Pale Pink can be worn alone, but is also perfect for layering on top of other blushes and bronzers for an added pop of pink. A favorite of Poshly Beauty Editor AJ Marechal, Bobbi Brown Blush in Pale Pink will be a new staple in your beauty arsenal, offering you a wintertime glow -- even while in the safety of the warm indoors! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/bobbi-brown-blush-pale-pink.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131028071816+0000",
            "end": "131107191816+0000",
            "keywords": [
                "cheek",
                "faceblush"
            ]
        },
        {
            "id": "pomegranate-power",
            "url": "/giveaway/pomegranate-power",
            "title": "Pomegranate Power!",
            "short_title": "Enter to win the Pomegranate Body Kit from The Aloe Source!",
            "description": "Harness the antioxidant benefits of pomegranate while sudsing up in the shower each day! The Aloe Source's Pomegranate Body Kit features a luxurious pomegranate body wash boasting grapefruit and grape seed extract, along with a rich pomegranate moisturizer to apply after toweling off. The Pomegranate Body Lavish lotion is packed with avocado, jojoba and sweet almond oil to lock in moisture fresh from the shower, leaving skin soft, hydrated and smelling wonderful. Both body care products feature stabilized aloe vera to keep your arms, gams and more nourished throughout the upcoming winter months. Clear a shelf in your bathroom for these products, and enter to win the Pomegranate Body Kit from The Aloe Source now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/the-aloe-source-pomegranate-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131027061520+0000",
            "end": "131104011520+0000",
            "keywords": [
                "body",
                "bathbody"
            ]
        },
        {
            "id": "suchin-paks-skincare-faves",
            "url": "/giveaway/suchin-paks-skincare-faves",
            "title": "SuChin Pak's Skincare Faves!",
            "short_title": "Enter to win a bundle featuring products from Josie Maran and O.R.G. Skincare curated by SuChin Pak!",
            "description": "Prep your face for winter weather with this powerful pair of moisture-balancing skincare products! Josie Maran's Argan Cleansing Oil is a 3-in-1 dream that works as a natural cleanser, makeup remover and anti-aging moisturizer. This vegan cleansing oil helps restore skin's pH balance along with its essential fatty acids, and is perfect to sub in for your typical cleanser during colder months, as it doesn't strip skin of its needed natural moisture. Then, boost your skincare regimen with the O.R.G. Skincare Organic Mineral Face Peel, a non-abrasive exfoliator that helps slough away dry skin patches and leave your face looking radiant -- even when bundled up in a scarf! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/suchin-pak-skincare-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131026031016+0000",
            "end": "131103151016+0000",
            "keywords": [
                "face",
                "skincare"
            ]
        },
        {
            "id": "autumn-spice-for-home",
            "url": "/giveaway/autumn-spice-for-home",
            "title": "Autumn Spice For Home",
            "short_title": "Enter to win L'Occitane's Spicy Cinnamon Candle!",
            "description": "Autumn is always a feast for the senses -- from gorgeous fall trees, to crisp October air, there is a full-bodied seasonal experience around each corner during this time of year. With L'Occitane's Spicy Cinnamon candle, you can bring the smell of autumn into the comfort of your own home with the flick of a match! The Spicy Cinnamon candle burns clean with minimal smoke, and boasts the aromas of sweet gingerbread and brown cinnamon. Light when you get home from a long day at work and enjoy the smell of classic autumn goods...no oven required!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/loccitane-spicy-cinnamon-candle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131020021800+0000",
            "end": "131031021800+0000",
            "keywords": [
                "body",
                "product"
            ]
        },
        {
            "id": "summer-skin-in-autumn",
            "url": "/giveaway/summer-skin-in-autumn",
            "title": "Summer Skin in Autumn",
            "short_title": "Enter to win Olay Quench Plus Touch of Sun Body Lotion!",
            "description": "Not quite ready to smooch that sun-kissed glow goodbye this fall season? Keep your gams bronzed  with Olay's Quench Plus Touch of Sun Body Lotion! This gradual sunless tanner nixes the orange streaking of its heavy-duty competitors, offering you a subtle glow year round. Olay's formula also hydrates skin for 24 hours after application, leaving skin looking -- and feeling -- healthier than ever. Autumn trees and a summer tan? Who said you can't have it all!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/olay-quench-touch-of-sun.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131016110401+0000",
            "end": "131028230401+0000",
            "keywords": [
                "body",
                "bodylotionmoisturizer"
            ]
        },
        {
            "id": "suchin-paks-makeup-staples",
            "url": "/giveaway/suchin-paks-makeup-staples",
            "title": "SuChin Pak's Makeup Staples!",
            "short_title": "Enter to win a bundle featuring EM Cosmetics and RMS Beauty makeup products!",
            "description": "Sophisticated makeup for the working gal has never been easier thanks to this Poshly bundle curated by SuChin Pak! The Career Life palette from YouTube guru Michelle Phan's EM Cosmetics boasts a whopping 36 shades, including 24 eyeshadows, 8 lip colors and 4 blushes. Mix and match the neutral shadow colors with warm cheek and lip tones for a variety of professional looks to take you from mornings in the office to evening networking drinks. Toss RMS's Lip2Cheek in Smile in your bag for pout touchups throughout your busy schedule. In need of inspiration? Michelle Phan's EM Cosmetics site includes tutorial vids on how to leverage the shades in the Career Life palette. Enter to win SuChin Pak's favorite products now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/suchin-pak-bundle-1.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131014080856+0000",
            "end": "131022200856+0000",
            "keywords": [
                "face",
                "facemakeup"
            ]
        },
        {
            "id": "stock-up-on-holiday-lashes",
            "url": "/giveaway/stock-up-on-holiday-lashes",
            "title": "Stock Up On Holiday Lashes!",
            "short_title": "Enter to win Sephora's Day and Night Glam Lash Set!",
            "description": "With Halloween rapidly approaching, ramped up beauty looks will be front and center on Instagram, Facebook, and in-person at fab fetes! Stock up your beauty cabinet for the event march with this set of lashes from Sephora that boasts a trio of versatile falsies. Whether you're going big and bold for an over-the-top Halloween costume, or subtly enchanting for an office holiday gathering, the Sephora Day and Night Glam Lash Set will serve your fall and winter season needs. The kit comes with lash glue as well! Enter to win this fab set now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/sephora-false-lash-set.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131011032148+0000",
            "end": "131021152148+0000",
            "keywords": [
                "eye",
                "eyes"
            ]
        },
        {
            "id": "the-urban-decay-revolution",
            "url": "/giveaway/the-urban-decay-revolution",
            "title": "The Urban Decay Revolution",
            "short_title": "Enter to win Urban Decay's new Revolution lipstick in Bang!",
            "description": "Urban Decay has a new beauty weapon in its arsenal. Meet Revolution, a buttery, highly-pigmented lipstick from the brand that brought you the coveted NAKED and NAKED2 palettes. The Revolution lipstick formula blends jojoba oil, avocado oil, cocoa butter and shea butter for a smooth, moisturizing finish that keeps lips feeling as good as they look. Poshly is giving away Urban Decay's Revolution lipstick in Bang, a bold orange-red that is a favorite of Poshly Beauty Editor AJ Marechal! Are you ready to start a Revolution? Enter to win this lipstick now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/urban-decay-revolutionary-lipstick.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131007093753+0000",
            "end": "131017213753+0000",
            "keywords": [
                "lips",
                "lipstick"
            ]
        },
        {
            "id": "melissa-gorgas-sexy-staples",
            "url": "/giveaway/melissa-gorgas-sexy-staples",
            "title": "Melissa Gorga's Sexy Staples!",
            "short_title": "Enter to win a bundle featuring L'Oreal and NARS curated by Melissa Gorga!",
            "description": "When it comes to an alluring face, Melissa Gorga knows how to get back to basics. L'Oreal's classic Voluminous mascara -- a cult fave for countless years -- is her go-to for defined, seductive eyes, setting off her eyeliner du jour with a clump-free lashline. NARS blush/bronzer duo in Desire/Laguna offers a modern take on the sculpted, flushed cheek: Laguna gives skin a sun-kissed glow well into autumn season, while the bold pink hue of Desire leaves skin appearing youthful and awake. Both products are fantastic staples for any beauty newbie or buff's arsenal, and complement almost any liner, shadow palette or lip color. Enter to win this must-have makeup bundle now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/melissa-gorga-bundle-2.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "131002043016+0000",
            "end": "131012163016+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "get-eczema-relief-with-eucerin",
            "url": "/giveaway/get-eczema-relief-with-eucerin",
            "title": "Get Eczema Relief With Eucerin",
            "short_title": "Enter to win Eucerin's Eczema Relief Body Creme!",
            "description": "Eczema's symptoms can be downright uncomfortable: dry, irritated skin with itching, and unsightly redness and flaking. New from Eucerin, the Eczema Relief Body Creme provides exactly what its product name says: relief! With ingredients including Licochalcone -- a licorice Root extract unique to the brand -- along with natural oatmeal and ceramide, skin is calmed and strengthened, giving you the relief you need. Free of fragrances, dyes and steroids, this product is gentle enough for daily use and babies’ sensitive skin. It is clinically proven to improve hydration, reduce skin redness and relieve itchiness. Enter to win Eucerin's Eczema Relief Body Creme now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/eucerin-eczema-body-creme.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "sponsorship_brand": "BID0000000000000113E",
            "active": false,
            "start": "131001082142+0000",
            "end": "131011202142+0000",
            "keywords": [
                "superficial",
                "bodycreammoisturizer"
            ]
        },
        {
            "id": "melissa-gorgas-flawless-face-kit",
            "url": "/giveaway/melissa-gorgas-flawless-face-kit",
            "title": "Melissa Gorga's Flawless Face Kit!",
            "short_title": "Enter to win a bundle featuring Make Up For Ever HD Foundation and Murad Essential-C Day Moisture!",
            "description": "Want a flawless face? Cover your bases with this bundle curated by Melissa Gorga! A reality TV starlet, Melissa is always camera-ready for Bravo's \"Real Housewives of New Jersey,\" and uses Make Up For Ever and Murad to keep her skin glowing throughout each shoot. Per Melissa, healthy skin is the gateway to a flawless look.  Murad's Essential-C Day Moisture with SPF 30 offers both antioxidant-rich hydration and UVA/UVB sun protection to stave off the signs of aging. Make Up For Ever's HD Foundation provides enough coverage to even out skin, but still allow for its natural radiance to shine through. Enter to win this bundle now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/melissa-g-flawless-skin-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130923040715+0000",
            "end": "131005040715+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "rapid-wrinkle-repair-from-neutrogena",
            "url": "/giveaway/rapid-wrinkle-repair-from-neutrogena",
            "title": "Rapid Wrinkle Repair From Neutrogena",
            "short_title": "Enter to win Neutrogena's Rapid Wrinkle Repair!",
            "description": "Wrinkles may take time to develop, but with Neutrogena's Rapid Wrinkle Repair, they can be reduced in as little as a week. This potent serum blends Retinol SA, Glucose Complex and hyaluronic acid to moisturize skin while simultaneously nixing fine lines and the look of age spots. The Rapid Wrinkle Repair serum is particularly helpful for crow's feet and the under eye area. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/neutrogena-rapid-wrinkle-serum.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130920072708+0000",
            "end": "131002192708+0000",
            "keywords": [
                "face",
                "facetreatment"
            ]
        },
        {
            "id": "correct-pores-with-clinique",
            "url": "/giveaway/correct-pores-with-clinique",
            "title": "Correct Pores With Clinique",
            "short_title": "Enter to win Clinique's Pore Refining Solutions Correcting Serum!",
            "description": "Skin in need of some correction? Use Clinique's Pore Refining Solutions Correcting Serum to shrink the look of pores! This oil-free serum can be used in the morning and at night (even under makeup!) and helps clear out the gunk that makes pores look big. After continued use, skin appears tighter, younger and smoother. Count us in! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/clinique-pore-serum.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130920063657+0000",
            "end": "130930183657+0000",
            "keywords": [
                "face",
                "facetreatment"
            ]
        },
        {
            "id": "give-skin-some-beauty-zzzs",
            "url": "/giveaway/give-skin-some-beauty-zzzs",
            "title": "Give Skin Some Beauty Zzzs",
            "short_title": "Enter to win Kiehl's Midnight Recovery Concentrate!",
            "description": "Time to give skin some R&R? Apply Kiehl's Midnight Recovery Concentrate before bed, and let this potent serum work its magic! Loaded with pure essential oils including evening primrose oil and lavender essential oil, Midnight Recovery Concentrate works during skin's reparative hours (while you snooze!) to help stave off dryness and signs of aging. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/kiehls-midnight-recovery.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130919095626+0000",
            "end": "130929215626+0000",
            "keywords": [
                "face",
                "facetreatment"
            ]
        },
        {
            "id": "electric-blue-eyes-at-marc-by-marc-jacobs",
            "url": "/giveaway/electric-blue-eyes-at-marc-by-marc-jacobs",
            "title": "Electric Blue Eyes at Marc by Marc Jacobs",
            "short_title": "Enter to win Make Up For Ever Aqua Cream eye shadow in Intense Blue, inspired by Marc by Marc Jacobs' runway show!",
            "description": "The Marc by Marc Jacobs Spring 2014 RTW show in New York City boasted a heavy emphasis on shine and edgy schoolgirl glitz. While the rest of the face was played down with hair that appeared air dried and balm-covered lips, artists smeared a heaping helping of electric blue eye shadow across the lids of models, as if applied in a hurry with school locker mirrors. You can bring this look off the runway and into your beauty routine with Make Up For Ever's Aqua Cream shadow in Intense Blue. This long-lasting cream shadow won't crease or budge as you make it through long days, or as you dance through your weekend nights. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/marc-marc-jacobs-makeup-forever.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130911113109+0000",
            "end": "130921233109+0000",
            "keywords": [
                "eye",
                "eyeshadow"
            ]
        },
        {
            "id": "cat-eyes-at-rodarte",
            "url": "/giveaway/cat-eyes-at-rodarte",
            "title": "Cat Eyes at Rodarte",
            "short_title": "Enter to win Sephora Long-Lasting 12HR Wear Eye Liner in Black, as inspired by Rodarte's runway show!",
            "description": "Defined eyes and deep side parts were the rage at Rodarte's Spring 2014 RTW show in New York this week, as models strutted down the runway rocking asymmetrical crop tops, animal prints and edgy jewelry. You can add this bold cat eye to your beauty arsenal with Sephora's Long-Lasting 12HR Wear Eye Liner in black, a liquid liner that dries to a matte finish. Add a touch of highlighter to the inner corners of the eyes and a coat of mascara to complete the rock n' roll look. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/rodarte-sephora-liner.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130910104339+0000",
            "end": "130920224339+0000",
            "keywords": [
                "eye",
                "eyeliner"
            ]
        },
        {
            "id": "red-lips-at-altuzarra",
            "url": "/giveaway/red-lips-at-altuzarra",
            "title": "Red Lips at Altuzarra",
            "short_title": "Enter to win Sephora Cream Lip Stain in Always Red, inspired by Altuzarra's collection!",
            "description": "Bright red lips brought a major dose of color to Altuzarra's Spring 2014 Ready To Wear collection at New York Fashion Week. The show, which featured garments that offered a touch of Americana with a modern twist, was largely comprised of solid shades of white, black and denim blue, allowing the bold red lip to shine on the runway. Bring the look from the runway to your beauty routine with Sephora Cream Lip Stain in Always Red, a long-wear matte lip color that complements almost any outfit. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/altuzarra-red-lips.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130909050822+0000",
            "end": "130918170822+0000",
            "keywords": [
                "lips",
                "lipstains"
            ]
        },
        {
            "id": "terracotta-cheeks-at-rebecca-minkoff",
            "url": "/giveaway/terracotta-cheeks-at-rebecca-minkoff",
            "title": "Terracotta Cheeks at Rebecca Minkoff",
            "short_title": "Enter to win Smashbox Bronze Lights in Sunkissed Matte, as inspired by Rebecca Minkoff's collection!",
            "description": "Models rocked terracotta cheeks at Rebecca Minkoff's Spring 2014 Ready To Wear show in New York, bringing a warm glow to the Mexico-inspired collection. Bring the look from the runway to your beauty routine with Smashbox Bronze Lights bronzer in Sunkissed Matte, buffing the shade into the hollows and on the apples of your cheeks. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/minkoff-smashbox.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130906113553+0000",
            "end": "130915233553+0000",
            "keywords": [
                "cheek",
                "faceblush"
            ]
        },
        {
            "id": "amandas-beauty-faves",
            "url": "/giveaway/amandas-beauty-faves",
            "title": "Amanda's Beauty Faves!",
            "short_title": "Enter to win a bundle curated by Amanda featuring MAC, NARS and Beauty Blender!",
            "description": "YouTube Beauty Vlogger Amanda brings you her favorite glam makeup products in this exclusive Poshly Giveaway! Perfect for creating day or nighttime looks, this beauty bundle features NARS blush in uber-flattering shade Madly, MAC lipstick in Angel, and versatile applicator the Beauty Blender. Use these products alone for a natural glow, or add a bold kohl liner and mascara for a sexy, Kardashian-inspired look! Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/amanda-curator-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130903154527+0000",
            "end": "130914234527+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "orange-lips-at-rag-and-bone",
            "url": "/giveaway/orange-lips-at-rag-and-bone",
            "title": "Orange Lips at Rag & Bone",
            "short_title": "Enter to win MAC lipstick in Morange, inspired by Rag & Bone's collection!",
            "description": "Ready to be bold? Rag & Bone's models sported a neon orange lip at the brand's Spring 2014 Ready To Wear show in New York, providing a daring pop of color against a largely monochromatic and print-free collection. You can bring this look off the runway and into your beauty routine with MAC lipstick in Morange, a creamy, matte orange and staple for many edgy beauty gurus. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/mac-morange-final-rag-bone.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130906105718+0000",
            "end": "130913225718+0000",
            "keywords": [
                "lips",
                "lipstick"
            ]
        },
        {
            "id": "no-more-excuses",
            "url": "/giveaway/no-more-excuses",
            "title": "No More Excuses!",
            "short_title": "Enter to win Garnier's Refreshing Remover Cleansing Towelettes!",
            "description": "Home from a long night out but still rocking a full face of makeup? No more excuses! Garnier's Refreshing Remover Cleansing Towelettes transform makeup removal from an arduous task into a breezy pre-bedtime routine! This oil-free formula not only nixes cosmetics and dirt, but also improves skin's appearance after repeated use. Keep this packet of wipes on your nightstand for less grime, more Zzz's!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/garnier-refreshing-remover.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130903042632+0000",
            "end": "130913162632+0000",
            "keywords": [
                "face",
                "facecleanser"
            ]
        },
        {
            "id": "healthy-blush-for-healthy-lips",
            "url": "/giveaway/healthy-blush-for-healthy-lips",
            "title": "Healthy Blush For Healthy Lips",
            "short_title": "Enter to win Neutrogena's Revitalizing Lip Balm in Healthy Blush!",
            "description": "Lush hydration, smooth texture, flattering color and a splash of SPF? Sign us up! Neutrogena's Revitalizing Lip Balm in Healthy Blush is as versatile as it gets, offering your pout moisture with the formula's signature ion2complex along with a glowing pink hue. Within a week of use, lips are healthier, rosier and softer. Plus, the sun protection makes this balm the perfect pairing for those lingering summer days spent in the sun!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/neutrogena-lip-balm.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130903040508+0000",
            "end": "130911160508+0000",
            "keywords": [
                "lips",
                "lipmakeup"
            ]
        },
        {
            "id": "autumn-nails-on-the-horizon",
            "url": "/giveaway/autumn-nails-on-the-horizon",
            "title": "Autumn Nails On The Horizon",
            "short_title": "Enter to win Nails Inc. Autumn Winter Nail Collection!",
            "description": "With summer winding down, stores and stylists are prepping their best autumn looks. Get your hands ready for a new season with Nails Inc.'s Autumn Winter Nail Collection, a perfect starter kit for fall manicures! This set features six mini nail lacquers to keep your nail color on point as the leaves change colors as well. Enter to win this Nails Inc. package now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/nails-inc-autumn-winter-set.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130822113715+0000",
            "end": "130905113715+0000",
            "keywords": [
                "fingernails",
                "nailpolish"
            ]
        },
        {
            "id": "amandas-beauty-faves",
            "url": "/giveaway/amandas-beauty-faves",
            "title": "Amanda's Beauty Faves!",
            "short_title": "Enter to win a bundle curated by Amanda featuring MAC, NARS and Beauty Blender!",
            "description": "TK",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/amanda-curator-bundle.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130903154527+0000",
            "end": "130903154527+0000",
            "keywords": [
                "face",
                "makeup"
            ]
        },
        {
            "id": "double-trouble-nars-orgasm-and-laguna",
            "url": "/giveaway/double-trouble-nars-orgasm-and-laguna",
            "title": "Double Trouble: NARS Orgasm & Laguna! ",
            "short_title": "Enter to win the NARS Orgasm and Laguna mini blush combo!",
            "description": "NARS Orgasm blush is widely hailed as one of the most universally flattering blush shades on the beauty market, and NARS Laguna bronzer is equally beloved by the makeup community. Take home both cult classic products in one sleek, mini case with this Poshly Giveaway! Apply Laguna in the hollows of your cheeks for a natural faux tan, and top the apples of your cheeks with a dash of Orgasm for a coy glow. Enter to win now!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/nars-orgasm-laguna.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130822113010+0000",
            "end": "130901233010+0000",
            "keywords": [
                "cheek",
                "makeup"
            ]
        },
        {
            "id": "a-healthy-glow-year-round",
            "url": "/giveaway/a-healthy-glow-year-round",
            "title": "A Healthy Glow Year-Round",
            "short_title": "Enter to win Belletto Studio's Healthy Glow Tanning Airbrush and Tanning Solution!",
            "description": "With summer coming to a close and the bikinis packed away, tans are bound to fade. You can keep your summertime glow revved up, though, with Belletto Studio's Healthy Glow Tanning system! Bringing a healthy, airbrushed glow to you from the comfort of your own home, this system boasts a tanning gun that allows for smooth, even application of tanning product, along with two bottles of Belletto Studio's Healthy Glow Tanning Solution. The Compact Compressor is also included with the package with a how-to DVD to help you apply a flawless tan -- sans UV rays! ",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/belletto-full-tanning-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130820092147+0000",
            "end": "130901212147+0000",
            "affiliation_url": "http://www.bellettostudio.com/shop/Healthy-Glow-Tanning/healthy-glow-tanning-airbrush-and-tanning-solution",
            "keywords": [
                "body",
                "selftannersbronzers"
            ]
        },
        {
            "id": "airbrushed-skin-you-got-it",
            "url": "/giveaway/airbrushed-skin-you-got-it",
            "title": "Airbrushed Skin? You Got It!",
            "short_title": "Enter to win Belletto Studio's Airbrush Basics Starter Kit!",
            "description": "Ready for airbrushed skin? Hollywood starlets employ this state of the art foundation application technique before photo shoots and events, and now you can as well from the comfort of your own home! Belletto Studio's Airbrush Basics Starter Kit includes two foundation shades and a blush that flatters your skin tone, along with an airbrushing machine and how-to DVD. With such a flawless foundation finish, you'll be more than ready for your high definition close up!",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/belletto-hd-airbrush-kit.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130820064637+0000",
            "end": "130831184637+0000",
            "affiliation_url": "http://bellettostudio.com/Airbrush-Basics-Starter-Kit",
            "keywords": [
                "face",
                "facefoundation"
            ]
        },
        {
            "id": "moisturized-hair-less-dry-time",
            "url": "/giveaway/moisturized-hair-less-dry-time",
            "title": "Moisturized Hair, Less Dry Time!",
            "short_title": "Enter to win NuMe's Arganics Argan Oil!",
            "description": "Locks dried out from summertime play? Nourish your thirsty hair with NuMe's Argan Oil from the brand's Arganics line! Rich with vitamin E and fatty acids, this non-greasy formula not only moisturizes tresses, but also prevents color from fading and reduces your hair's dry time post-shower! With a triple whammy of benefits, what's not to love about this hair treatment? And, P.S.: Argan Oil can be used to soothe dry skin, as well! Enter to win now!\r\n",
            "product_image": "http://d2a54bdcc45455f9a4c6-daa6f7956ff3374653f8eaf7fcb1f0a9.r89.cf2.rackcdn.com/products/arganics-nume-argan-oil.jpg",
            "question_count": 12,
            "sponsored": false,
            "sponsorship_type": "NotSponsored",
            "active": false,
            "start": "130820080510+0000",
            "end": "130830200510+0000",
            "affiliation_url": "http://www.numeproducts.com/argan-oil",
            "keywords": [
                "hair",
                "hairscalptreatments"
            ]
        }
    ]
};	
	return {
		getData: function() {
			return chartData;
		}
	};
});

