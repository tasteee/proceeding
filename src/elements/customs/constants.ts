const SPACE_REFERENCE_MAP = {
  $0: "var(--space0)",
  $1: "var(--space1)",
  $2: "var(--space2)",
  $3: "var(--space3)",
  $4: "var(--space4)",
  $5: "var(--space5)",
  $6: "var(--space6)",
  $7: "var(--space7)",
  $8: "var(--space8)",
  $9: "var(--space9)",
};

const COLOR_REFERENCE_MAP = {
  $white: "var(--white)",
  $black: "var(--black)",

  $gray50: "var(--gray50)",
  $gray100: "var(--gray100)",
  $gray200: "var(--gray200)",
  $gray300: "var(--gray300)",
  $gray400: "var(--gray400)",
  $gray500: "var(--gray500)",
  $gray600: "var(--gray600)",
  $gray700: "var(--gray700)",
  $gray800: "var(--gray800)",
  $gray900: "var(--gray900)",

  $yin: "var(--yin)",
  $yang: "var(--yang)",

  $yin50: "var(--yin50)",
  $yin100: "var(--yin100)",
  $yin200: "var(--yin200)",
  $yin300: "var(--yin300)",
  $yin400: "var(--yin400)",
  $yin500: "var(--yin500)",
  $yin600: "var(--yin600)",
  $yin700: "var(--yin700)",
  $yin800: "var(--yin800)",
  $yin900: "var(--yin900)",

  $yang50: "var(--yang50)",
  $yang100: "var(--yang100)",
  $yang200: "var(--yang200)",
  $yang300: "var(--yang300)",
  $yang400: "var(--yang400)",
  $yang500: "var(--yang500)",
  $yang600: "var(--yang600)",
  $yang700: "var(--yang700)",
  $yang800: "var(--yang800)",
  $yang900: "var(--yang900)",
};

export namespace RefMapKeysNS {
  export type Space = keyof typeof SPACE_REFERENCE_MAP;
  export type Color = keyof typeof COLOR_REFERENCE_MAP;
}

export const REFERENCE_MAPS = {
  SPACE: SPACE_REFERENCE_MAP,
  COLOR: COLOR_REFERENCE_MAP,
};
