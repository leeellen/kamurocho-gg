export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          steam_id: string;
          persona_name: string | null;
          avatar_url: string | null;
          profile_url: string | null;
          is_pro: boolean | null;
          last_synced: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          steam_id: string;
          persona_name?: string | null;
          avatar_url?: string | null;
          profile_url?: string | null;
          is_pro?: boolean | null;
          last_synced?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
    };
  };
};
