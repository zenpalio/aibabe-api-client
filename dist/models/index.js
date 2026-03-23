"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipStatus = exports.PublicUserReportReason = exports.PostType = exports.PhotoStyle = exports.Personality = exports.PaymentProviderType = exports.OwnerFilter = exports.Occupation = exports.OAuthProvider = exports.NotificationType = exports.ModelName = exports.MessageType = exports.MemoracekType = exports.MarketingCampaignName = exports.LoraName = exports.Language = exports.LLM = exports.InstanceType = exports.InstanceProvider = exports.ImageSendingMode = exports.ImageGenerationStatus = exports.ImageGenerationSource = exports.ImageGenerationQuality = exports.Hobby = exports.HairStyle = exports.HairColor = exports.GiftCodeType = exports.GetGalleryResponseItemsInnerTypeEnum = exports.GeneratedVideosTypeEnum = exports.GeneratedImagesTypeEnum = exports.GeneratedAudioStatus = exports.FurryVisualType = exports.FeatureFlagName = exports.FantasyRace = exports.EyeColor = exports.ExceptionCode = exports.Ethnicity = exports.DateRangeFilter = exports.ConversationMessageFeedback = exports.ContentReportReason = exports.ChatbotType = exports.ChatbotCreatedOrigin = exports.ChatRole = exports.ChatMode = exports.ButtSize = exports.BreastSize = exports.BodyType = exports.BillingPeriod = exports.ArtStyle = exports.AnimeLora = void 0;
exports.VisualType = exports.VideoLoraName = exports.VideoGenerationStatus = exports.UserRole = exports.UserClaimType = exports.TagVideoLora = exports.TagImageLora = exports.TagCategory = exports.SubscriptionTier = exports.SubscriptionStatus = exports.SpecialSubscriptionOffer = exports.SpecialFeatures = exports.SpecialAddonOffer = exports.SortFilter = exports.SharedContentType = exports.SeduceDifficulty = exports.RoleplayType = exports.ReviewCharacterFieldStatus = void 0;
/**
 *
 * @export
 */
exports.AnimeLora = {
    Disney3d: 'disney3d',
    Hentai: 'hentai',
    Cartoon: 'cartoon'
};
/**
 *
 * @export
 */
exports.ArtStyle = {
    Artea: 'artea',
    Fantasy: 'fantasy',
    Anime3d: 'anime3d',
    Cartoon: 'cartoon',
    Truelook: 'truelook',
    Velvetheat: 'velvetheat',
    Dreammix: 'dreammix'
};
/**
 *
 * @export
 */
exports.BillingPeriod = {
    Monthly: 'monthly',
    Quarterly: 'quarterly',
    Yearly: 'yearly'
};
/**
 *
 * @export
 */
exports.BodyType = {
    Slim: 'slim',
    Athletic: 'athletic',
    Voluptuous: 'voluptuous',
    Curvy: 'curvy'
};
/**
 *
 * @export
 */
exports.BreastSize = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Huge: 'huge'
};
/**
 *
 * @export
 */
exports.ButtSize = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Huge: 'huge'
};
/**
 *
 * @export
 */
exports.ChatMode = {
    Chat: 'chat',
    Roleplaying: 'roleplaying'
};
/**
 *
 * @export
 */
exports.ChatRole = {
    User: 'user',
    Assistant: 'assistant'
};
/**
 *
 * @export
 */
exports.ChatbotCreatedOrigin = {
    Custom: 'custom',
    Advanced: 'advanced'
};
/**
 *
 * @export
 */
exports.ChatbotType = {
    Girls: 'girls',
    Anime: 'anime',
    Boys: 'boys',
    Internal: 'internal',
    Fantasy: 'fantasy'
};
/**
 *
 * @export
 */
exports.ContentReportReason = {
    UnderageContent: 'UnderageContent',
    Incest: 'Incest',
    GoreOrRape: 'GoreOrRape',
    AdsOrSpam: 'AdsOrSpam',
    Copyright: 'Copyright',
    Other: 'Other'
};
/**
 *
 * @export
 */
exports.ConversationMessageFeedback = {
    Positive: 'positive',
    Negative: 'negative'
};
/**
 *
 * @export
 */
exports.DateRangeFilter = {
    Day: 'day',
    Week: 'week',
    Month: 'month',
    Year: 'year',
    AllTime: 'all_time'
};
/**
 *
 * @export
 */
exports.Ethnicity = {
    Asian: 'asian',
    Black: 'black',
    Caucasian: 'caucasian',
    Arab: 'arab',
    Latina: 'latina',
    Indian: 'indian',
    Furry: 'furry'
};
/**
 *
 * @export
 */
exports.ExceptionCode = {
    InternalError: 'internal_error',
    AuthInvalidCredentials: 'auth_invalid_credentials',
    AuthInvalidPassword: 'auth_invalid_password',
    AuthNotVerified: 'auth_not_verified',
    AuthOauthOnly: 'auth_oauth_only',
    UserAlreadyExists: 'user_already_exists',
    UserNotFound: 'user_not_found',
    UserNotSubscribed: 'user_not_subscribed',
    UserIdentityRequired: 'user_identity_required',
    UserEmailRequired: 'user_email_required',
    UserEmailInvalid: 'user_email_invalid',
    UserSelfActionForbidden: 'user_self_action_forbidden',
    UserNotFoundOrInsufficientPermissions: 'user_not_found_or_insufficient_permissions',
    UserIdNotPresent: 'user_id_not_present',
    EmailAddressUsed: 'email_address_used',
    EmailAddressUsedRecently: 'email_address_used_recently',
    PublicUserNotFound: 'public_user_not_found',
    PublicUsernameTaken: 'public_username_taken',
    PublicUsernameRequired: 'public_username_required',
    PublicUsernameUnavailable: 'public_username_unavailable',
    DonorNotFound: 'donor_not_found',
    RecipientNotFound: 'recipient_not_found',
    ChatbotNotFound: 'chatbot_not_found',
    ChatbotBlueprintNotFound: 'chatbot_blueprint_not_found',
    AdvancedChatbotBuilderInProgressNotFound: 'advanced_chatbot_builder_in_progress_not_found',
    AdvancedChatbotBuilderInconsistentData: 'advanced_chatbot_builder_inconsistent_data',
    AdvancedCharacterBuilderDataMissing: 'advanced_character_builder_data_missing',
    CharacterProfileTagsInvalid: 'character_profile_tags_invalid',
    CharacterProfileAgeInvalid: 'character_profile_age_invalid',
    CharacterProfileGenderMissing: 'character_profile_gender_missing',
    CustomCharactersLimitReached: 'custom_characters_limit_reached',
    FreemiumLimitsReached: 'freemium_limits_reached',
    ChatbotNotOwnedOrNotCustom: 'chatbot_not_owned_or_not_custom',
    ChatbotNonOwnedForbidden: 'chatbot_non_owned_forbidden',
    ChatbotNameTooLong: 'chatbot_name_too_long',
    ProfileVideoNotFound: 'profile_video_not_found',
    ConversationNotFound: 'conversation_not_found',
    ConversationUpdateNonOwnedForbidden: 'conversation_update_non_owned_forbidden',
    ConversationResetNonOwnedForbidden: 'conversation_reset_non_owned_forbidden',
    ConversationMemoryNotFound: 'conversation_memory_not_found',
    MessageNotFound: 'message_not_found',
    PinnedMemoryNotFound: 'pinned_memory_not_found',
    AboutUserTooLong: 'about_user_too_long',
    AboutUserModerationException: 'about_user_moderation_exception',
    MessageModerationFlagged: 'message_moderation_flagged',
    PinnedMemoryCharLimitExceeded: 'pinned_memory_char_limit_exceeded',
    TokensInsufficient: 'tokens_insufficient',
    TokensInvalidAmount: 'tokens_invalid_amount',
    LimitsReached: 'limits_reached',
    ClaimInvalid: 'claim_invalid',
    ClaimablesNotFound: 'claimables_not_found',
    FormatNotSupported: 'format_not_supported',
    FileSizeExceeded: 'file_size_exceeded',
    FileUploadFailed: 'file_upload_failed',
    FileNotFound: 'file_not_found',
    InvalidPictureType: 'invalid_picture_type',
    ImageNotFound: 'image_not_found',
    ImageNotOwned: 'image_not_owned',
    VideoNotFound: 'video_not_found',
    VideoNotOwned: 'video_not_owned',
    VideoUploadImageFailed: 'video_upload_image_failed',
    VideoRetrieveFailed: 'video_retrieve_failed',
    VideoGenerationLimitReached: 'video_generation_limit_reached',
    GenerationTagsNotFound: 'generation_tags_not_found',
    VerificationCodeExprired: 'verification_code_exprired',
    VerificationCodeInvalid: 'verification_code_invalid',
    VerificationCodeNotSet: 'verification_code_not_set',
    PostNotFound: 'post_not_found',
    PostLocked: 'post_locked',
    PostDeleteNotAuthorized: 'post_delete_not_authorized',
    PostUpdateNotAuthorized: 'post_update_not_authorized',
    PostReportContentMissing: 'post_report_content_missing',
    ShareContentTypeUnsupported: 'share_content_type_unsupported',
    ShareVideoNonOwnedForbidden: 'share_video_non_owned_forbidden',
    ShareImageNonOwnedForbidden: 'share_image_non_owned_forbidden',
    ShareCharacterNonOwnedForbidden: 'share_character_non_owned_forbidden',
    CharacterNotFound: 'character_not_found',
    InvalidPlanId: 'invalid_plan_id',
    InvalidAddonId: 'invalid_addon_id',
    TransactionNotFound: 'transaction_not_found',
    GiftCodeNotFoundOrUsed: 'gift_code_not_found_or_used',
    LeaderOnlyAction: 'leader_only_action',
    ServerNotFound: 'server_not_found',
    WebsocketServerNotAvailable: 'websocket_server_not_available',
    LlmModelNotAvailable: 'llm_model_not_available',
    EmailSendFailed: 'email_send_failed',
    InvalidParams: 'invalid_params',
    ModerationFlagged: 'moderation_flagged',
    MarketingCampaignNotFound: 'marketing_campaign_not_found',
    MarketingCampaignNotAcceptable: 'marketing_campaign_not_acceptable',
    MarketingCampaignNoState: 'marketing_campaign_no_state'
};
/**
 *
 * @export
 */
exports.EyeColor = {
    Blue: 'blue',
    Brown: 'brown',
    Green: 'green'
};
/**
 *
 * @export
 */
exports.FantasyRace = {
    Alien: 'alien',
    Android: 'android',
    Barbarian: 'barbarian',
    Cyborg: 'cyborg',
    DarkElf: 'dark_elf',
    DragonQueen: 'dragon_queen',
    Dryad: 'dryad',
    ForestNymph: 'forest_nymph',
    Elf: 'elf',
    ElfPriestess: 'elf_priestess',
    Fairy: 'fairy',
    Ghost: 'ghost',
    Goddess: 'goddess',
    Human: 'human',
    Mage: 'mage',
    Mermaid: 'mermaid',
    Orc: 'orc',
    Succubus: 'succubus',
    Superhero: 'superhero',
    Tentacle: 'tentacle',
    Valkyrie: 'valkyrie',
    Witch: 'witch'
};
/**
 *
 * @export
 */
exports.FeatureFlagName = {
    GrokModeration: 'GROK_MODERATION',
    MarketingBanners: 'MARKETING_BANNERS'
};
/**
 *
 * @export
 */
exports.FurryVisualType = {
    Catgirl: 'catgirl',
    Wolfgirl: 'wolfgirl',
    Foxgirl: 'foxgirl',
    Bunnygirl: 'bunnygirl',
    Cowgirl: 'cowgirl',
    Sharkgirl: 'sharkgirl',
    Tigergirl: 'tigergirl',
    Dragoness: 'dragoness'
};
/**
 *
 * @export
 */
exports.GeneratedAudioStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
};
/**
 * @export
 */
exports.GeneratedImagesTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
};
/**
 * @export
 */
exports.GeneratedVideosTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
};
/**
 * @export
 */
exports.GetGalleryResponseItemsInnerTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
};
/**
 *
 * @export
 */
exports.GiftCodeType = {
    _100: 'tokens_100',
    _200: 'tokens_200',
    _500: 'tokens_500',
    _1200: 'tokens_1200'
};
/**
 *
 * @export
 */
exports.HairColor = {
    Blonde: 'blonde',
    Brunette: 'brunette',
    Black: 'black',
    Pink: 'pink',
    DarkBrownHair: 'Dark Brown Hair',
    Blue: 'blue',
    Chestnut: 'chestnut',
    Ginger: 'ginger',
    DarkRed: 'dark red',
    LightBlue: 'light blue',
    DarkBlue: 'dark blue',
    DarkPurple: 'dark purple',
    Green: 'green',
    Grey: 'grey',
    White: 'white',
    TealWithPurpleHighlightHair: 'teal with purple highlight hair',
    RainbowColors: 'rainbow colors',
    BlondeHairWithPinkBalayage: 'blonde hair with pink balayage',
    PurpleHairWithPinkBalayage: 'purple hair with pink balayage',
    BlondeHairWithPinkOmbre: 'blonde hair with pink ombre',
    PlatiniumBlonde: 'platinium blonde',
    Random: 'random'
};
/**
 *
 * @export
 */
exports.HairStyle = {
    Short: 'short',
    Braids: 'braids',
    Curly: 'curly',
    Straight: 'straight',
    Bun: 'bun',
    Ponytail: 'ponytail',
    ShoulderLengthStraight: 'shoulder length straight',
    VeryLongWave: 'very long wave',
    LooseWave: 'loose wave',
    CurlyFrizzy: 'curly frizzy',
    CurlyShort: 'curly short',
    Ringlets: 'ringlets',
    StackedCurlsInShortBlob: 'stacked curls in Short Blob',
    BlobHaircut: 'Blob haircut',
    BluntBlobHaircut: 'Blunt Blob haircut',
    BowlCut: 'Bowl cut',
    ShoulderLengthWithBangs: 'shoulder length with bangs',
    LongHairWithBangs: 'long hair with bangs',
    Updo: 'updo',
    Chignon: 'chignon',
    DoubleBun: 'double bun',
    Twintails: 'twintails',
    SideBraid: 'side braid',
    FishtailBraid: 'fishtail braid',
    BoxBraids: 'box braids',
    ShortCurlyPixieCut: 'short curly pixie cut',
    PixieCut: 'pixie cut',
    TomboyCut: 'tomboy cut',
    HighPonytail: 'high ponytail',
    LongPonytail: 'long ponytail',
    Cornrows: 'cornrows',
    Dreadlocks: 'dreadlocks',
    LooseCurlyAfro: 'loose curly afro',
    Afro: 'afro',
    Cloudy: 'cloudy',
    Crimped: 'crimped',
    BuzzCut: 'buzz cut',
    Bald: 'bald',
    BleachedSpikes: 'bleached spikes',
    Spiky: 'spiky',
    Mohawk: 'mohawk',
    FrenchTwist: 'french twist',
    Beehive: 'beehive',
    Pompadour: 'pompadour',
    QuiffHaircut: 'quiff haircut',
    CrazyFuturistic: 'crazy futuristic',
    CrazyPunk: 'crazy punk',
    CrazyVintage: 'crazy vintage',
    PinterestMultiple: 'pinterest multiple',
    MegaTwinDrillstwintails: 'mega twin drills,twintails',
    MegaPonytail: 'mega ponytail',
    Big: 'big'
};
/**
 *
 * @export
 */
exports.Hobby = {
    Reading: 'reading',
    Writing: 'writing',
    Youtube: 'youtube',
    TvSeries: 'tv_series',
    Anime: 'anime',
    Cosplay: 'cosplay',
    Hiking: 'hiking',
    Manga: 'manga',
    Streaming: 'streaming',
    Yoga: 'yoga',
    TikTok: 'tik_tok',
    Photography: 'photography',
    Traveling: 'traveling',
    Dancing: 'dancing',
    VideoGames: 'video_games',
    Memes: 'memes',
    Podcasts: 'podcasts',
    DigitalArt: 'digital_art',
    Movies: 'movies',
    Fitness: 'fitness',
    Cooking: 'cooking',
    Fishing: 'fishing',
    Camping: 'camping',
    Chess: 'chess',
    BoardGames: 'board_games',
    Vlogging: 'vlogging',
    Sports: 'sports',
    Puzzles: 'puzzles'
};
/**
 *
 * @export
 */
exports.ImageGenerationQuality = {
    Low: 'low',
    High: 'high'
};
/**
 *
 * @export
 */
exports.ImageGenerationSource = {
    Chat: 'chat',
    Generator: 'generator'
};
/**
 *
 * @export
 */
exports.ImageGenerationStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
};
/**
 *
 * @export
 */
exports.ImageSendingMode = {
    Dynamic: 'dynamic',
    Request: 'request',
    Off: 'off'
};
/**
 *
 * @export
 */
exports.InstanceProvider = {
    Runpod: 'runpod',
    Vastai: 'vastai'
};
/**
 *
 * @export
 */
exports.InstanceType = {
    Automatic1111: 'automatic1111',
    Tgi: 'tgi',
    Video: 'video',
    Audio: 'audio'
};
/**
 *
 * @export
 */
exports.LLM = {
    Gemma: 'gemma',
    Llama: 'llama',
    Lemonade: 'lemonade',
    Qwen3: 'qwen3',
    LemonadePremium: 'lemonade_premium',
    GemmaPremium: 'gemma_premium'
};
/**
 *
 * @export
 */
exports.Language = {
    En: 'en',
    De: 'de',
    Fr: 'fr',
    Es: 'es',
    It: 'it',
    Cs: 'cs',
    Pl: 'pl'
};
/**
 *
 * @export
 */
exports.LoraName = {
    Aesthetic: 'aesthetic',
    Aheago: 'aheago',
    Anal: 'anal',
    AnalAllPoses: 'anal_all_poses',
    AnalBeads: 'anal_beads',
    Analogue: 'analogue',
    Bimbo: 'bimbo',
    Blowjob: 'blowjob',
    Bukkake: 'bukkake',
    Buttplug: 'buttplug',
    Choking: 'choking',
    CowgirlPov: 'cowgirl_pov',
    Creampie: 'creampie',
    Cyberpunk: 'cyberpunk',
    DeepthroathNoseSnot: 'deepthroath_nose_snot',
    DeepthroathSideways: 'deepthroath_sideways',
    DeepthroathSloppy: 'deepthroath_sloppy',
    DetailTweaker: 'detail_tweaker',
    DetailedPainting: 'detailed_painting',
    _3DanimationDisney10: '3Danimation_Disney_1.0',
    DoggyStyleAnal: 'doggy_style_anal',
    DoggyStyleVaginal: 'doggy_style_vaginal',
    DoublePenentration: 'double_penentration',
    DramaticLighting: 'dramatic_lighting',
    DramaticLightingPony: 'dramatic_lighting_pony',
    Ebony: 'ebony',
    EyesForPony: 'eyes_for_pony',
    ExpressiveH: 'Expressive_H',
    FacesitAnime: 'facesit_anime',
    Facesitting: 'facesitting',
    Facials: 'facials',
    Feet: 'feet',
    FemaleEjaculation: 'female_ejaculation',
    FingerInAss: 'finger_in_ass',
    Fingering: 'fingering',
    Fisting: 'fisting',
    FistingAnal: 'fisting_anal',
    Footjob: 'footjob',
    FootjobPony: 'footjob_pony',
    FullNelson: 'full_nelson',
    FutanariErect: 'futanari_erect',
    FutanariFlaccid: 'futanari_flaccid',
    FutanariRealistic: 'futanari_realistic',
    G0th1cPxl: 'g0th1cPXL',
    GhoticGirl: 'ghotic_girl',
    HairyArmpit: 'hairy_armpit',
    HairyPussy: 'hairy_pussy',
    HiddenSpycam: 'hidden_spycam',
    HiddenSpycamPony: 'hidden_spycam_pony',
    IncaseStyle: 'incase_style',
    Indian: 'indian',
    Kawaii: 'kawaii',
    LeakedNudes: 'leaked_nudes',
    LegsBehindHead: 'legs_behind_head',
    LegsBehindHeadPony: 'legs_behind_head_pony',
    MirrorSelfie: 'mirror_selfie',
    MissionaryAnalPov: 'missionary_anal_pov',
    MissionaryPov: 'missionary_pov',
    MountOpenTongueOut: 'mount_open_tongue_out',
    TendertroupeV01Pony: 'tendertroupe_v0.1-pony',
    Nerdy: 'nerdy',
    NsfwFilter: 'nsfw_filter',
    OrgasmFace: 'orgasm_face',
    Overexposed: 'overexposed',
    OverexposedPony: 'overexposed_pony',
    Pantyhose: 'pantyhose',
    PencilDrawing: 'pencil_drawing',
    PerfectEyes: 'perfect_eyes',
    Punk: 'punk',
    PussyCloseupFront: 'pussy_closeup_front',
    PussyCloseupRear: 'pussy_closeup_rear',
    PussySpread: 'pussy_spread',
    PussyToysFront: 'pussy_toys_front',
    PussyToysRear: 'pussy_toys_rear',
    RealCum: 'real_cum',
    RealTentacles: 'real_tentacles',
    ReverseCowgirlAnal: 'reverse_cowgirl_anal',
    ReverseCowgirlPov: 'reverse_cowgirl_pov',
    Rimjob: 'rimjob',
    SaggingBreasts: 'sagging_breasts',
    Shibbari: 'shibbari',
    SpreadAss: 'spread_ass',
    SubmissionDogeza: 'submission_dogeza',
    SubmissionRestrainedPublic: 'submission_restrained_public',
    Tattoos: 'tattoos',
    TgirlsV2: 'tgirls_v2',
    Titfuck: 'titfuck',
    UprightStraddleSex: 'upright_straddle_sex',
    Woke: 'woke',
    None: 'none'
};
/**
 *
 * @export
 */
exports.MarketingCampaignName = {
    LimitReset: 'limit_reset',
    FirstTimeOfferReminder: 'first_time_offer_reminder',
    FailedPaymentReminder: 'failed_payment_reminder'
};
/**
 *
 * @export
 */
exports.MemoracekType = {
    NewHonic: 'new_honic',
    AttemptedHonic1month: 'attempted_honic_1month',
    AttemptedHonic3month: 'attempted_honic_3month',
    AttemptedSlevakHonic: 'attempted_slevak_honic',
    AttemptedSuperrichHonic1month: 'attempted_superrich_honic_1month',
    AttemptedSuperrichHonic3month: 'attempted_superrich_honic_3month',
    SlevakHonic: 'slevak_honic',
    SubscribedHonic: 'subscribed_honic',
    RichHonic: 'rich_honic',
    SubscribedSuperrichHonic: 'subscribed_superrich_honic',
    GiftCodeRedeemed: 'gift_code_redeemed',
    AttemptedRichHonic: 'attempted_rich_honic',
    RebilledHonic1month: 'rebilled_honic_1month',
    RebilledHonic3month: 'rebilled_honic_3month'
};
/**
 *
 * @export
 */
exports.MessageType = {
    Text: 'text',
    Image: 'image',
    Video: 'video'
};
/**
 *
 * @export
 */
exports.ModelName = {
    LustifySdxlnsfwV40Alpha: 'lustifySDXLNSFW_v40Alpha',
    PrefectPonyXlV40: 'prefectPonyXL_v40',
    BigLustV15: 'bigLust_v15',
    LustifySdxlnsfwEndgame: 'lustifySDXLNSFW_endgame',
    WildcardxXlponyWildcardxXlponyv1: 'wildcardxXLPONY_wildcardxXLPONYV1',
    UberRealisticPornMergePonyxlPonyxlHybridV1: 'uberRealisticPornMergePonyxl_ponyxlHybridV1',
    BabesByStableYogiPonyV3: 'babesByStableYogi_ponyV3',
    WallnutIllustrious: 'wallnut_illustrious',
    IllustriousByStableYogi: 'illustriousByStableYogi'
};
/**
 *
 * @export
 */
exports.NotificationType = {
    LikePost: 'like_post',
    Donation: 'donation',
    Follow: 'follow'
};
/**
 *
 * @export
 */
exports.OAuthProvider = {
    Google: 'google',
    Discord: 'discord',
    X: 'x',
    Patreon: 'patreon'
};
/**
 *
 * @export
 */
exports.Occupation = {
    Student: 'student',
    Teacher: 'teacher',
    Doctor: 'doctor',
    Soldier: 'soldier',
    Nurse: 'nurse',
    Therapist: 'therapist',
    Model: 'model',
    Policeman: 'policeman',
    Domina: 'domina',
    YogaInstruction: 'yoga_instruction',
    Lawyer: 'lawyer',
    Stewardess: 'stewardess',
    BusinessOwner: 'business_owner',
    Housewife: 'housewife',
    Dj: 'DJ'
};
/**
 *
 * @export
 */
exports.OwnerFilter = {
    Featured: 'featured',
    Own: 'own',
    Liked: 'liked',
    Community: 'community',
    Followed: 'followed'
};
/**
 *
 * @export
 */
exports.PaymentProviderType = {
    Unicorn: 'unicorn',
    Corpay: 'corpay',
    Patreon: 'patreon',
    Truevo: 'truevo'
};
/**
 *
 * @export
 */
exports.Personality = {
    Caregiver: 'caregiver',
    Shy: 'shy',
    Submissive: 'submissive',
    Mean: 'mean',
    Dominant: 'dominant',
    Flirty: 'flirty',
    Lover: 'lover',
    Nympho: 'nympho'
};
/**
 *
 * @export
 */
exports.PhotoStyle = {
    Amateur: 'amateur',
    Canon: 'canon'
};
/**
 *
 * @export
 */
exports.PostType = {
    Image: 'image',
    Video: 'video',
    Character: 'character',
    Media: 'media',
    All: 'all'
};
/**
 *
 * @export
 */
exports.PublicUserReportReason = {
    Impersonation: 'Impersonation',
    HarassmentOrBullying: 'HarassmentOrBullying',
    HateSpeech: 'HateSpeech',
    Underage: 'Underage',
    Other: 'Other'
};
/**
 *
 * @export
 */
exports.RelationshipStatus = {
    Girlfriend: 'girlfriend',
    Sexfriend: 'sexfriend',
    Stepmom: 'stepmom',
    Stepsister: 'stepsister',
    Colleague: 'colleague',
    SchoolMate: 'school_mate',
    Wife: 'wife',
    Mistress: 'mistress',
    Stranger: 'stranger',
    Friend: 'friend'
};
/**
 *
 * @export
 */
exports.ReviewCharacterFieldStatus = {
    Ok: 'ok',
    ModerationException: 'moderation_exception',
    ToBeReviewed: 'to_be_reviewed'
};
/**
 *
 * @export
 */
exports.RoleplayType = {
    FamilyTaboo: 'family_taboo',
    Schoolmate: 'schoolmate',
    Friend: 'friend',
    Gf: 'gf',
    Cheating: 'cheating',
    Lingerie: 'lingerie',
    Corruption: 'corruption',
    Cuckolding: 'cuckolding',
    Bdsm: 'bdsm',
    Milf: 'milf',
    Patient: 'patient',
    Roommate: 'roommate',
    Hypnosis: 'hypnosis',
    GuidedJerkoff: 'guided_jerkoff',
    Teacher: 'teacher',
    Femdom: 'femdom',
    PublicPlay: 'public_play',
    Coworker: 'coworker',
    Breeding: 'breeding',
    Humiliation: 'humiliation',
    FootFetish: 'foot_fetish',
    BratTaming: 'brat_taming',
    GothGirl: 'goth_girl',
    Bully: 'bully',
    Lesbian: 'lesbian'
};
/**
 *
 * @export
 */
exports.SeduceDifficulty = {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard',
    Impossible: 'impossible'
};
/**
 *
 * @export
 */
exports.SharedContentType = {
    Picture: 'picture',
    Video: 'video',
    Character: 'character'
};
/**
 *
 * @export
 */
exports.SortFilter = {
    Trending: 'trending',
    Newest: 'newest',
    MostLiked: 'most_liked',
    MostMessages: 'most_messages',
    LatestMessage: 'latest_message'
};
/**
 *
 * @export
 */
exports.SpecialAddonOffer = {
    None: 'none',
    Welcome: 'welcome',
    BonusTokens: 'bonus_tokens',
    GiftCodes: 'gift_codes'
};
/**
 *
 * @export
 */
exports.SpecialFeatures = {
    Tattoos: 'tattoos',
    PubicHair: 'pubic_hair',
    Piercing: 'piercing',
    Freckles: 'freckles',
    Pregnant: 'pregnant',
    Glasses: 'glasses',
    Futa: 'futa',
    Trans: 'trans',
    HugeBreasts: 'huge_breasts',
    RedLipstick: 'red_lipstick',
    LongNails: 'long_nails',
    PearlEarrings: 'pearl_earrings'
};
/**
 *
 * @export
 */
exports.SpecialSubscriptionOffer = {
    None: 'none',
    BonusTokens: 'bonus_tokens'
};
/**
 *
 * @export
 */
exports.SubscriptionStatus = {
    Inactive: 'inactive',
    Active: 'active',
    Trial: 'trial',
    Canceled: 'canceled'
};
/**
 *
 * @export
 */
exports.SubscriptionTier = {
    Premium: 'premium',
    Ultra: 'ultra'
};
/**
 *
 * @export
 */
exports.TagCategory = {
    BaseModel: 'base_model',
    HairColor: 'hair_color',
    BodyType: 'body_type',
    BreastSize: 'breast_size',
    AssSize: 'ass_size',
    SexPosition: 'sex_position',
    Gender: 'gender',
    Fetishes: 'fetishes',
    Ethnicity: 'ethnicity',
    Age: 'age',
    Lora: 'lora',
    Style: 'style',
    RoleplayType: 'roleplay_type',
    CharacterType: 'character_type'
};
/**
 *
 * @export
 */
exports.TagImageLora = {
    Aheago: 'aheago',
    Anal: 'anal',
    Bdsm: 'BDSM',
    Blowjob: 'blowjob',
    Bukkake: 'bukkake',
    Buttplug: 'buttplug',
    Cowgirl: 'cowgirl',
    Creampie: 'creampie',
    Deepthroath: 'deepthroath',
    Dildo: 'dildo',
    DoggyStyle: 'doggy_style',
    DoublePenetration: 'double_penetration',
    Facesitting: 'facesitting',
    Facials: 'facials',
    Feets: 'feets',
    Fingering: 'fingering',
    Fisting: 'fisting',
    Footjob: 'footjob',
    FullNelson: 'full_nelson',
    Futa: 'futa',
    Gangbang: 'gangbang',
    Hairy: 'hairy',
    LegsBehindHead: 'legs_behind_head',
    Missionary: 'missionary',
    Pantyhose: 'pantyhose',
    Penis: 'penis',
    ReverseCowgirl: 'reverse_cowgirl',
    Rimjob: 'rimjob',
    SaggingBreasts: 'sagging_breasts',
    Sex: 'sex',
    Sfw: 'sfw',
    Solo: 'solo',
    SpreadingAss: 'spreading_ass',
    Squirting: 'squirting',
    Straddling: 'straddling',
    Tattoos: 'tattoos',
    Tentacles: 'tentacles',
    Titfuck: 'titfuck'
};
/**
 *
 * @export
 */
exports.TagVideoLora = {
    Aheago: 'aheago',
    Anal: 'anal',
    Bdsm: 'BDSM',
    Blowjob: 'blowjob',
    BoobBounce: 'boob_bounce',
    BreastExpansion: 'breast_expansion',
    BreastPlay: 'breast_play',
    Bukkake: 'bukkake',
    Cowgirl: 'cowgirl',
    Creampie: 'creampie',
    Cumshot: 'cumshot',
    Deepthroat: 'deepthroat',
    Dildo: 'dildo',
    DoggyStyle: 'doggy_style',
    Facials: 'facials',
    Feets: 'feets',
    Fingering: 'fingering',
    Footjob: 'footjob',
    Futa: 'futa',
    Hanjob: 'hanjob',
    Joi: 'joi',
    Kissing: 'kissing',
    Masturbation: 'masturbation',
    MatingPress: 'mating_press',
    Missionary: 'missionary',
    Orgasm: 'orgasm',
    Penis: 'penis',
    Pissing: 'pissing',
    PussyLicking: 'pussy_licking',
    Rimjob: 'rimjob',
    Sex: 'sex',
    Sfw: 'sfw',
    SizeChange: 'size_change',
    Solo: 'solo',
    Squirting: 'squirting',
    StomachBulge: 'stomach_bulge',
    Tentacles: 'tentacles',
    Titfuck: 'titfuck',
    Twerk: 'twerk'
};
/**
 *
 * @export
 */
exports.UserClaimType = {
    Discord: 'discord',
    Reddit: 'reddit',
    Instagram: 'instagram',
    DailyLogin: 'daily_login'
};
/**
 *
 * @export
 */
exports.UserRole = {
    Admin: 'admin',
    User: 'user',
    Bot: 'bot',
    Editor: 'editor',
    Tester: 'tester'
};
/**
 *
 * @export
 */
exports.VideoGenerationStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
};
/**
 *
 * @export
 */
exports.VideoLoraName = {
    PovInsertion: 'pov_insertion',
    FacialsV2: 'facials_v2',
    CumInMouth: 'cum_in_mouth',
    AnimeCumshotHair: 'anime_cumshot_hair',
    AnimeFacials: 'anime_facials',
    AnimeCumshotMouth: 'anime_cumshot_mouth',
    AnimeCumshotTongue: 'anime_cumshot_tongue',
    AnimeCumshot: 'anime_cumshot',
    MouthfullCumshot: 'mouthfull_cumshot',
    BreastExpansion: 'breast_expansion',
    Cunnilingus: 'cunnilingus',
    Airblowjob: 'airblowjob',
    DildoHandjob: 'dildo_handjob',
    BreastPlayGrabbingSolo: 'breast_play_grabbing_solo',
    BreastPlayGrabbingMan: 'breast_play_grabbing_man',
    BreastPlayCoverSolo: 'breast_play_cover_solo',
    BreastPlayRubSolo: 'breast_play_rub_solo',
    BreastPlayNipplePinch: 'breast_play_nipple_pinch',
    BreastPlay: 'breast_play',
    PovIntimateContact: 'pov_intimate_contact',
    TwerkV2: 'twerk_v2',
    HandjobBlowjob: 'handjob_blowjob',
    StomachBulgeV2: 'stomach_bulge_v2',
    BigSplash: 'big_splash',
    FingeringV2: 'fingering_v2',
    FaceToFeet: 'face_to_feet',
    Meatspin: 'meatspin',
    TentaclesV2: 'tentacles_v2',
    FutaMasturbationCumshot: 'futa_masturbation_cumshot',
    MatingPress: 'mating_press',
    FootjobV2: 'footjob_v2',
    FutaSoloToSex: 'futa_solo_to_sex',
    OrgasmFace: 'orgasm_face',
    OrgasmBodyShake: 'orgasm_body_shake',
    FootWorshipSucking: 'foot_worship_sucking',
    JoiHandGesture: 'joi_hand_gesture',
    PenisAndBreastsSizeController: 'penis_and_breasts_size_controller',
    FrenchKiss: 'french_kiss',
    Creampie: 'creampie',
    PovTittyFuck: 'pov_titty_fuck',
    PovKissing: 'pov_kissing',
    DildoPenetration: 'dildo_penetration',
    SexyMoves: 'sexy_moves',
    DeepthroatFaceFuck: 'deepthroat_face_fuck',
    SmoothAnimation: 'smooth_animation',
    PovPulloutCumshotNoTouching: 'pov_pullout_cumshot_no_touching',
    PovPulloutCumshotManFinishes: 'pov_pullout_cumshot_man_finishes',
    PovPulloutCumshotFemaleFinishes: 'pov_pullout_cumshot_female_finishes',
    AhegaoDroolingWithMiddlefinger: 'ahegao_drooling_with_middlefinger',
    PenisInsert: 'penis_insert',
    SelfNippleSucking: 'self_nipple_sucking',
    CumhaterFacial: 'cumhater_facial',
    FurryEnhancer: 'furry_enhancer',
    Pronebone: 'pronebone',
    GaggingDisgustedExpression: 'gagging_disgusted_expression',
    FootjobSockjobShoejob: 'footjob_sockjob_shoejob',
    BodyGrowth: 'body_growth',
    BodyGrowthClothesRipoff: 'body_growth_clothes_ripoff',
    AnimeXrayCreampie: 'anime_xray_creampie',
    TongueOut: 'tongue_out',
    Rimjob: 'rimjob',
    BoobBounceV2: 'boob_bounce_v2',
    TakerPovBlowjob: 'taker_pov_blowjob',
    SpitToCamera: 'spit_to_camera',
    RunningBoobBounce: 'running_boob_bounce',
    SplitTongue: 'split_tongue',
    ThunderGodEyes: 'thunder_god_eyes',
    OralPenisInsertion: 'oral_penis_insertion',
    FaceToFeetAlternative: 'face_to_feet_alternative',
    Deepthroat: 'deepthroat',
    ImpliedBlowjob: 'implied_blowjob',
    MissionaryV2: 'missionary_v2',
    DoggystyleV2: 'doggystyle_v2',
    CowgirlV2: 'cowgirl_v2',
    BlowjobV2: 'blowjob_v2',
    ReverseCowgirl: 'reverse_cowgirl',
    DoubleBlowjob: 'double_blowjob',
    GeneralSexPoses: 'general_sex_poses',
    SeriesOfCumshots: 'series_of_cumshots',
    Bukkake: 'bukkake',
    FaceDownAssUp: 'face_down_ass_up',
    HandjobV2: 'handjob_v2',
    HandjobDoublehand: 'handjob_doublehand',
    DildoRide: 'dildo_ride',
    Anal: 'anal',
    FemaleSquirt: 'female_squirt',
    Ahegao: 'ahegao',
    Bondage: 'bondage',
    Dancing: 'dancing',
    Spanking: 'spanking',
    FemaleMasturbation: 'female_masturbation',
    PovDoggyStyle: 'pov_doggy_style',
    Blowjob: 'blowjob',
    PovMissionary: 'pov_missionary',
    PovCowgirl: 'pov_cowgirl',
    TittyFuck: 'titty_fuck',
    FemaleGenitalsHelpter: 'female_genitals_helpter',
    Fingering: 'fingering',
    PovDoggyStyle2: 'pov_doggy_style2',
    Handjob: 'handjob',
    BoobGrab: 'boob_grab',
    FootJob: 'foot_job',
    Tentacles: 'tentacles',
    StomachBulge: 'stomach_bulge',
    PovFuttaFelatio: 'pov_futta_felatio',
    FutanariMasturbation: 'futanari_masturbation',
    BoobsBounce: 'boobs_bounce',
    Penis: 'penis',
    Cumshot: 'cumshot',
    Twerk: 'twerk',
    Facials: 'facials',
    FaceFuck: 'face_fuck',
    BoobsJiggling: 'boobs_jiggling'
};
/**
 *
 * @export
 */
exports.VisualType = {
    Natural: 'natural',
    Altgirl: 'altgirl',
    Bimbo: 'bimbo',
    Cyberpunk: 'cyberpunk',
    Dominatrix: 'dominatrix',
    Egirl: 'egirl',
    Goth: 'goth',
    Hipster: 'hipster',
    Instachick: 'instachick',
    Nordic: 'nordic',
    Kawaii: 'kawaii',
    Punk: 'punk',
    Schoolgirl: 'schoolgirl',
    Tomboy: 'tomboy'
};
//# sourceMappingURL=index.js.map