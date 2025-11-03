/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArtWork2022, ArtWork2023, ArtWork2024, ArtWork2025, ArtWorkOther, CaruselImages, CaruselImagesMobile, GalleryImages, HomeImages } from "../../assets/import";
import { optimizeCloudinaryUrl, optimizeCloudinaryThumbnail } from "@/lib/cloudinary";

export const ArtWorkGridImages = [
    ArtWork2022.Abstract_1 ,
    ArtWork2022.Cave_Walls ,
    ArtWork2022.Raisins_et_Vin ,
    ArtWork2023.A_Shy_Peasant,

    ArtWork2023.Angel_Appears_to_Balaam,
    ArtWork2023.Virgin_and_Child_with_Angels,
    ArtWork2024.A_War_That_Never_Ends,
    ArtWork2024.Amrita_Sher_Gil_Self_Portrait,

    ArtWork2024.Conceited,
    ArtWork2024.Rembrandt_Self_Portrait,
    ArtWork2024.Since_I_Don_t_have_you,
    ArtWork2024.Tracks_Of_My_Tears,

    ArtWork2025.All_Eyes_on_YOU,
    ArtWork2025.Lady_on_the_Stairs,
    ArtWork2025.Live_Model_Study,
    ArtWork2025.Still_Life_and_Sculpture_Study,

]

export const ArtWorkGalleryImages = [
    HomeImages.Image1,
    HomeImages.Image2,
    HomeImages.Image3
]

export const ArtWorkCaruselImagesDesktop = [
    CaruselImages.Image1,
    CaruselImages.Image2,
    CaruselImages.Image3
]

export const ArtWorkCaruselImagesMobile = [
    CaruselImagesMobile.Image1,
    CaruselImagesMobile.Image2,
    CaruselImagesMobile.Image3
]

export const ArtWorkDataPerYear = [
    {
        title: "2022",
        slug: "2022",
        galleryImages: GalleryImages.Image1,
        images: [
            {
                id: 1,
                title: "Raisins et Vin",
                dimensions: "36x36",
                medium: "Oil on Canvas",
                image: ArtWork2022.Raisins_et_Vin,
                ImageURL: optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Raisins_et_Vin_36x36_Oil_on_Canvas_xqiub6.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Raisins_et_Vin_36x36_Oil_on_Canvas_xqiub6.jpg", 400),
            },
            {
                id: 2,
                title: "Cave Walls",    
                dimensions: "72x60",
                medium: "Acrylic on Canvas",
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Cave_Walls___72x60___Acrylic_on_Canvas__ruddhb.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Cave_Walls___72x60___Acrylic_on_Canvas__ruddhb.jpg", 400)
            },
            {
                id: 3,
                title: "Abstract 1",
                dimensions: "30x36",
                medium: "Acrylic on Canvas",
                image: ArtWork2022.Abstract_1,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Abstract_1____30x36__Acrylic_on_Canvas__cyuakp.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Abstract_1____30x36__Acrylic_on_Canvas__cyuakp.jpg", 400)
            },
        ]
    },
    {
        title: "2023",
        slug: "2023",
        galleryImages: GalleryImages.Image2,
        images: [
            {
                id: 1,
                title: "A Shy Peasant (Inspired by Ilya Repin)",
                dimensions: "48x60",
                medium: "Oil on Canvas",
                image: ArtWork2023.A_Shy_Peasant,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/A_Shy_Peasant_Inspired_by_llya_Repin_48x60_Oil_on_Canvas_nhgrqo.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/A_Shy_Peasant_Inspired_by_llya_Repin_48x60_Oil_on_Canvas_nhgrqo.png", 600)
            },
            {
                id: 2,
                title: "Virgin and Child with Angels (Inspired by Bartolomeo Cavarozzi)",
                dimensions: "36x48",
                medium: "Oil on Canvas",
                image: ArtWork2023.Virgin_and_Child_with_Angels,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009148/Virgin_and_Child_with_Angels_Inspired_by_Bartolomeo_Cavarozzi_36x48_Oil_on_Canvas_hbibhu.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009148/Virgin_and_Child_with_Angels_Inspired_by_Bartolomeo_Cavarozzi_36x48_Oil_on_Canvas_hbibhu.png", 600)
            },
            {
                id: 3,
                title: "Angel Appears to Balaam (Inspired by Gustave Doré)",
                dimensions: "48x60",
                medium: "Oil on Canvas",
                image: ArtWork2023.Angel_Appears_to_Balaam,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009148/Angel_Appears_to_Balaam_Inspired_by_Gustave_Dore%CC%81_qab1qf.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009148/Angel_Appears_to_Balaam_Inspired_by_Gustave_Dore%CC%81_qab1qf.png", 600)
            },
        ]
    },
    {
        title: "2024",
        slug: "2024",
        galleryImages: GalleryImages.Image3,
        images: [
            {
                id: 1,
                title: "A War That Never Ends",
                dimensions: "30x40",
                medium: "Mix Media on Canvas",
                image: ArtWork2024.A_War_That_Never_Ends,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009147/A_War_That_Never_Ends_30x40._Mix_Media_On_canvas_rcadua.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009147/A_War_That_Never_Ends_30x40._Mix_Media_On_canvas_rcadua.png", 600)
            },
            {
                id: 2,
                title: "Since I Don't Have You",
                dimensions: "48x48",
                medium: "Charcoal on Canvas",
                image: ArtWork2024.Since_I_Don_t_have_you,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Since_I_Don_t_have_you_48x48_Charcoal_On_Canvas_vxbhox.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Since_I_Don_t_have_you_48x48_Charcoal_On_Canvas_vxbhox.png", 600)
            },
            {
                id: 3,
                title: "Tracks of My Tears",
                dimensions: "36x36",
                medium: "Charcoal on Canvas",
                image: ArtWork2024.Tracks_Of_My_Tears,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Tracks_Of_My_Tears_36x36._Charcoal_on_canvas_druaw0.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Tracks_Of_My_Tears_36x36._Charcoal_on_canvas_druaw0.png", 600)
            },
            {
                id: 4,
                title: "Conceited",
                dimensions: "48x60",
                medium: "Acrylic on Canvas",
                image: ArtWork2024.Conceited,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Conceited._48x60._acrylic_on_canvas_veixqh.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Conceited._48x60._acrylic_on_canvas_veixqh.png", 600)
            },
            {
                id: 5,
                title: "Rembrandt (Self Portrait)",
                dimensions: "36x36",
                medium: "Oil on Canvas",
                image: ArtWork2024.Rembrandt_Self_Portrait,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Rembrandt_Self_Potrait._36x36_Oil_On_canvas_ezxroy.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Rembrandt_Self_Potrait._36x36_Oil_On_canvas_ezxroy.jpg", 600)
            },
            {
                id: 6,
                title: "Amrita Sher-Gil (Self Portrait)",
                dimensions: "48x60",
                medium: "Oil on Canvas",
                image: ArtWork2024.Amrita_Sher_Gil_Self_Portrait,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Amrita_Sher-Gil_self_Portrait_48x60._Oil_on_canvas_x2mvgd.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009142/Amrita_Sher-Gil_self_Portrait_48x60._Oil_on_canvas_x2mvgd.png", 600)
            },
            {
                id: 7,
                title: "Untitled",
                dimensions: "38cm x 56cm",
                medium: "Digital (Procreate)",
                image: ArtWork2024.Untitled_Digital,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009149/Untitled_Digital_Procreate_PNG_c0a2y7.png"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009149/Untitled_Digital_Procreate_PNG_c0a2y7.png", 600)
            },
        ]
    },
    {
        title: "2025",
        slug: "2025",
        galleryImages: GalleryImages.Image4,
        images: [
            {
                id: 1,
                title: "All Eyes on YOU",
                dimensions: "38cm x 56cm",
                medium: "Charcoal on Paper",
                image: ArtWork2025.All_Eyes_on_YOU,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__All_Eyes_on_YOU_Medium__Charcoal_on_Paper_mkdy4l.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__All_Eyes_on_YOU_Medium__Charcoal_on_Paper_mkdy4l.jpg", 600)
            },
            {
                id: 2,
                title: "सपेरा (Sapera)",
                dimensions: "24\" x 30\"",
                medium: "Oil on Canvas",
                image: ArtWork2025.Sapera,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__%E0%A4%B8%E0%A4%AA%E0%A5%87%E0%A4%B0%E0%A4%BE_Sapera_Medium__Oil_on_Canvas_Dimensions__24_x_30_offrwz.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__%E0%A4%B8%E0%A4%AA%E0%A5%87%E0%A4%B0%E0%A4%BE_Sapera_Medium__Oil_on_Canvas_Dimensions__24_x_30_offrwz.jpg", 600)
                },
            {
                id: 3,
                title: "Lady on the Stairs",
                dimensions: "24\" x 30\"",
                medium: "Oil on Canvas",
                image: ArtWork2025.Lady_on_the_Stairs,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Lady_on_the_Stairs_Medium__Oil_on_Canvas_Dimensions__24_x_30_y1d8vy.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Lady_on_the_Stairs_Medium__Oil_on_Canvas_Dimensions__24_x_30_y1d8vy.jpg", 600)
            },
            {
                id: 4,
                title: "Live Model Study",
                dimensions: "30\" x 30\"",
                medium: "Oil on Canvas",
                image: ArtWork2025.Live_Model_Study,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Live_Model_Study_Medium__Oil_on_Canvas_Dimensions__30_x_30_famglu.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Live_Model_Study_Medium__Oil_on_Canvas_Dimensions__30_x_30_famglu.jpg", 600)
            },
            {
                id: 5,  
                title: "Still Life and Sculpture Study",
                dimensions: "75cm x 55cm",
                medium: "Soft Pastels on Pastel Sheet",
                image: ArtWork2025.Still_Life_and_Sculpture_Study,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Still_Life_and_Sculpture_Study_Medium__Soft_Pastels_on_Pastel_Sheet_Dimensions__75cm_x_55cm_snjk0i.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Still_Life_and_Sculpture_Study_Medium__Soft_Pastels_on_Pastel_Sheet_Dimensions__75cm_x_55cm_snjk0i.jpg", 600)
            },
            {
                id: 6,
                title: "The Bird's Eye",
                dimensions: "31cm x 40cm",
                medium: "Relief Mural on P.O.P.",
                image: ArtWork2025.The_Birds_Eye,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Title__The_Bird_s_Eye_Medium__Relief_Mural_on_P.O.P._Dimensions__31cm_x_40cm_fxvkcp.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Title__The_Bird_s_Eye_Medium__Relief_Mural_on_P.O.P._Dimensions__31cm_x_40cm_fxvkcp.jpg", 600)
            },
            {
                id: 7,
                title: "All Day, Everyday",
                dimensions: "38cm x 56cm",
                medium: "Water Color and Soft Pastels on Paper",
                image: ArtWork2025.All_day_Everyday,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__All_day_Everyday_Medium__Water_color_and_Soft_Pastels_on_Paper_Dimensions__38cm_x_56cm_sjv7h0.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__All_day_Everyday_Medium__Water_color_and_Soft_Pastels_on_Paper_Dimensions__38cm_x_56cm_sjv7h0.jpg", 600)
            },
            {
                id: 8,
                title: "Untitled (Mix Media)",
                dimensions: "38cm x 56cm",
                medium: "Mix Media on Paper",
                image: ArtWork2025.Untitled,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__Untitled_Medium__Mix_Media_on_Paper_Dimensions__38cm_x_56cm_jhiqwq.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__Untitled_Medium__Mix_Media_on_Paper_Dimensions__38cm_x_56cm_jhiqwq.jpg", 600)
            },
            {
                id: 9,
                title: "Reflection 2",
                dimensions: "16\" x 20\"",
                medium: "Acrylic on Canvas Board",
                image: ArtWork2025.Reflection_2,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Reflection_2_Medium__Acrylic_on_Canvas_Board_Dimensions__16_x_20_c4xop3.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Reflection_2_Medium__Acrylic_on_Canvas_Board_Dimensions__16_x_20_c4xop3.jpg", 600)
            },
            {
                id: 10,
                title: "Reflection 1",
                dimensions: "75cm x 55cm",
                medium: "Charcoal on Paper",
                image: ArtWork2025.Reflection_1,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Reflection_1_Medium__Charcoal_on_paper_Dimensions__75cm_x_55cm_qqzbmk.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__Reflection_1_Medium__Charcoal_on_paper_Dimensions__75cm_x_55cm_qqzbmk.jpg", 600)
            },
            {
                id: 11,
                title: "At The Basecamp",
                dimensions: "30\" x 40\"",
                medium: "Charcoal and Acrylics on Canvas",
                image: ArtWork2025.At_The_Basecamp,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Title__At_The_Basecamp_Medium__Charcoal_and_Acrylics_on_Canvas_Dimensions__30__x_40__hixfu9.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009146/Title__At_The_Basecamp_Medium__Charcoal_and_Acrylics_on_Canvas_Dimensions__30__x_40__hixfu9.jpg", 600)
            },
            {
                id: 12,
                title: "Camouflage",
                dimensions: "18cm x 23cm",
                medium: "Wood Cut Print",
                image: ArtWork2025.Camouflage,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__Camouflage_Medium__Wood_Cut_Print_Dimensions__18cm_x_23cm_eb8foc.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009143/Title__Camouflage_Medium__Wood_Cut_Print_Dimensions__18cm_x_23cm_eb8foc.jpg", 600)
            },
            {
                id: 13,
                title: "The 3 Easels",
                dimensions: "75cm x 55cm",
                medium: "Charcoal on Paper",
                image: ArtWork2025.The_3_Easels,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__The_3_Easels_Medium__Charcoal_on_paper_Dimensions__75cm_x_55cm_ctjkm6.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009144/Title__The_3_Easels_Medium__Charcoal_on_paper_Dimensions__75cm_x_55cm_ctjkm6.jpg", 600)
            },
            {
                id: 14,
                title: "The Flow",
                dimensions: "Digital",
                medium: "Digital (Procreate)",
                image: ArtWork2025.The_Flow,
                ImageURL : optimizeCloudinaryUrl("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__The_Flow_Medium__Digital_Procreate_qcset6.jpg"),
                ImageURLThumbnail: optimizeCloudinaryThumbnail("https://res.cloudinary.com/dk01aynpa/image/upload/v1762009145/Title__The_Flow_Medium__Digital_Procreate_qcset6.jpg", 600)
            },
                
        ]
    },
]

